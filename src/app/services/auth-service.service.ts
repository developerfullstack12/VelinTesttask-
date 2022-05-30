import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() {
  }
  public login(email:any){
    var data = {email:'admin@gmail.com', password:12345678 }
    data
  };
}
