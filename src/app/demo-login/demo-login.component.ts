import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { NotificationService } from '../services/notification.service';
// import { emailValidator } from 'src/app/core/helpers/helpers.function';
@Component({
  selector: 'app-demo-login',
  templateUrl: './demo-login.component.html',
  styleUrls: ['./demo-login.component.css']
})
export class DemoLoginComponent implements OnInit {
  data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "admin@gmail.com",
      "password": 12345678
    },
  ];
  clickedItem: any;
  public formGroup: FormGroup;
  constructor(
    public router: Router,
    private localStorageSvc: LocalStorageService,
    private notify: NotificationService
  ) {
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(256)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
      ])
    });
  }
  ngOnInit(): void {
  }
  public onSubmit() {
    const { email, password } = this.formGroup.value;
    const loginData = this.data.filter(ele => { return ele.email == email && ele.password == password });
     if(loginData.length > 0) {
      this.localStorageSvc.set('name', loginData[0].name);
        this.router.navigateByUrl('/home');
      } else {
        this.notify.showError('email and password');
      }
  }
}
