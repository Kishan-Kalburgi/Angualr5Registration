import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adv-form',
  templateUrl: './adv-form.component.html',
  styleUrls: ['./adv-form.component.css']
})
export class AdvFormComponent implements OnInit {

  user: User;
  // enthinicity: any[];
  isSubmitted = false;

  constructor(private router: Router) { 
    // this.enthinicity = ["Asian", "American Indian", "African American"]
    this.user = new User;
  }

  ngOnInit() {
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
      this.router.navigate(['/report'])
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
