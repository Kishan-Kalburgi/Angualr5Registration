import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.user = new User;
    this.user.gender = this.gender[0];
    this.step = "1";
  }

  ngOnInit() {
  }

  onFormNext({ value, valid }: { value: User, valid: boolean }) {
    this.isSubmitted = true
    this.user = value;
    this.step = "2";
    
  }

  onFormSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.isSubmitted = true
    this.user = value;
    // console.log(this.user);
    // console.log('valid: ' + valid);
    if (valid) {
      this.user = value;
      console.log(this.user);
      console.log('valid: ' + valid);
      this.router.navigate(['/adv'])
      // this.dataService.saveUser(this.user)
      //   .subscribe((data) => {
      //     console.log(data)
      //     console.log("success")
      //     this.router.navigate(['/users'])
      //   },
      //     error => {
      //       console.log("Error Occured")
      //     });
    }
  }
}
