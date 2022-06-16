import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';
import { AuthComponent } from './components/auth/auth.component';

const routes:Routes=[
  {path: '', component:RegistrationListComponent},
  {path: 'registrationNew', component:RegistrationNewComponent},
  {path: 'registrationEdit/:id', component:RegistrationEditComponent},
  {path: 'register', component:AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    RegistrationListComponent,
    RegistrationEditComponent,
    AuthComponent
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