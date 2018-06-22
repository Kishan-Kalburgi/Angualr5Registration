import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  user: User;
  isSubmitted = false;
  gender = ["Select Gender", "Male", "Female", "Other"];
  step: string;

  constructor(private router: Router, private dataService: DataService) {
    this.user = new User;
    this.user.gender = this.gender[0];
    this.step = "1";
  }

  ngOnInit() {
  }

  onFormNext({ value, valid }: { value: User, valid: boolean }) {
    this.isSubmitted = true;
    this.step = "2";
    this.user = value;
    
  }

  onFormSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.isSubmitted = true
    console.log(value)
    // console.log(this.user);
    // console.log('valid: ' + valid);
    if (valid) {
      this.user.endDate = value.endDate;
    this.user.startDate = value.startDate;
    this.user.toPlace = value.toPlace;
    this.user.fromPlace = value.fromPlace;
      console.log(this.user);
      console.log('valid: ' + valid);
      
      this.dataService.addUser(this.user)
        .subscribe((data :any) => {
          console.log(data)
          
          console.log("success")
          this.router.navigate(['/report/'+ data.id])
        },
          error => {
            console.log("Error Occured")
          });
    }
  }
}
