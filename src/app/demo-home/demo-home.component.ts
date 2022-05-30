import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
export interface PeriodicElement {
  id:number,
  date: any;
  image: string;
  mainHead: any;
  subHead: string;
  amount: string;
}
const ELEMENT_DATA: PeriodicElement[] = [{
  id:1,
  date: 'oct 19',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: 'The tea lounge',
  subHead: 'card payment',
  amount: '$182.02'
}, {
  id:2,
  date: 'oct 18',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: 'Texaco',
  subHead: 'card payment',
  amount: '$282.02'
},
{
  id:3,
  date: 'oct 21',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: 'Amozon Online Store',
  subHead: 'card payment',
  amount: '$821.02'
},
{
  id:4,
  date: 'oct 17',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: 'The tea lounge',
  subHead: 'card payment',
  amount: '$822.02'
},
{
  id:5,
  date: 'oct 16',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: '7-Eleven',
  subHead: 'card payment',
  amount: '$82.02'
},
{
  id:6,
  date: 'oct 16',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: 'The tea lounge',
  subHead: 'card payment',
  amount: '$821.02'
},
{
  id:7,
  date: 'oct 15',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: 'The tea lounge',
  subHead: 'card payment',
  amount: '$812.02'
},
{
  id:8,
  date: 'oct 14',
  image: 'http://localhost:4200/assets/img/right.png',
  mainHead: 'The tea lounge',
  subHead: 'card payment',
  amount: '$824.02'
}
]
@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.css']
})
export class DemoHomeComponent implements OnInit {
  public formGroup: FormGroup;
  sortData: any;
  search: FormControl = new FormControl('');
  dataSource: any;
  // @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['date', 'image', 'mainHead', 'amount'];
  constructor(
    private localStorageSvc: LocalStorageService,
    private router:Router,
    private notify: NotificationService 
  ) {
    this.formGroup = new FormGroup({
      formAccount: new FormControl('',[Validators.required]),
      toAccount: new FormControl('',[Validators.required]),
      amount: new FormControl('',[Validators.required])
    })
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onChange(event: any) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    const sortData: any = ELEMENT_DATA.sort(function (a, b) {
      var nameA = a.date.toUpperCase(); // ignore upper and lowercase
      var nameB = b.date.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB || event.target.value == 'DESC') {
        return -1;
      }
      if (nameA > nameB && event.target.value == 'ASC') {
        return 1;
      }
      return 0;
    });
    this.dataSource.filteredData = sortData;
  }

  onChangeAmount(event: any) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    const sortData: any = ELEMENT_DATA.sort(function (a, b) {
      var nameA = a.amount; // ignore upper and lowercase
      var nameB = b.amount; // ignore upper and lowercase
      if (nameA < nameB || event.target.value == 'DESC') {
        return -1;
      }
      if (nameA > nameB && event.target.value == 'ASC') {
        return 1;
      }
      return 0;
    });
    this.dataSource.filteredData = sortData;
  }
  clickData(event: any) {
      this.router.navigateByUrl('/details/'+event);
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource = ELEMENT_DATA.filter(el => el.id === event);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    if (this.formGroup.invalid) return;
    const { formAccount, toAccount, amount } = this.formGroup.value
    this.localStorageSvc.set('trnsactionData', { formAccount: formAccount, toAccount: toAccount, amount: amount })
    this.notify.showInfo('Data successfully saved...!!!');
   this.formGroup.reset();
  }
}

