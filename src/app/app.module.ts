import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoLoginComponent } from './demo-login/demo-login.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';
import { NotificationService } from './services/notification.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoLoginComponent,
    DemoHomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [
    NotificationService,
    ToastrService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
