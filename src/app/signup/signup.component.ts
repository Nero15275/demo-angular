import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../servics/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) { }
  signup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl('', [Validators.required]),


  });
  signupSubmit() {
    console.log(this.signup.value)
    this.userservice.signup(this.signup.value).subscribe((data: any) => {
      console.log(data)
      if (data.success === true) {
        alert('Signup Successfull')
        this.router.navigate(['/signin'])

      }

    }, (err) => {
      console.log(err)
    })

  }
  get username() {
    return this.signup.get('username')
  }
  get mobile() {
    return this.signup.get('mobile')
  }
  get email() {
    return this.signup.get('email')
  }
  get password() {
    return this.signup.get('password')
  }
  get address() {
    return this.signup.get('address')
  }

  ngOnInit(): void {
  }

}
