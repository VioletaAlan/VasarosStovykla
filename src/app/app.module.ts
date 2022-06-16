import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';

const routes:Routes=[
  {path: '', component:RegistrationListComponent},
  {path: 'registrationNew', component:RegistrationNewComponent},
  {path: 'registrationEdit/:id', component:RegistrationEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    RegistrationListComponent,
    RegistrationEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
