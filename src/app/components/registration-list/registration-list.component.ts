import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  public registrations:Registration[]=[];

  constructor(private registrationSevice:RegistrationService) { }

  private loadRegistrations(){
    this.registrationSevice.getRegistrations().subscribe((result)=>{
      this.registrations=result;
    });
  }
  ngOnInit(): void {
    this.loadRegistrations();
  }

  public onDeleteRegistration(id:string|null){
    if (id!=null){
      this.registrationSevice.deleteRegistration(id).subscribe(()=>{
        this.loadRegistrations();
      });
    }
  }
}
