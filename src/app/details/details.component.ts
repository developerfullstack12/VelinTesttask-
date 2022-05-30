import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private localStorageSvc: LocalStorageService,
    private notify: NotificationService
  ) { 
    this.formGroup = new FormGroup({
      formAccount: new FormControl('',[Validators.required]),
      toAccount: new FormControl('',[Validators.required]),
      amount: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formGroup.invalid) return;
    const { formAccount, toAccount, amount } = this.formGroup.value
    this.localStorageSvc.set('trnsactionData', { formAccount: formAccount, toAccount: toAccount, amount: amount })
    this.notify.showInfo('Data successfully saved...!!!');
   this.formGroup.reset();
  }

}
