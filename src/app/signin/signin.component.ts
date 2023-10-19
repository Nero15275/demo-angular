import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../servics/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userData: any
  constructor(private userservice: UserService, private fb: FormBuilder, private router: Router) {
    this.userservice.userData.subscribe(uData => {
      this.userData = uData
    })
  }


  login = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(6)])

  });
  loginSubmit() {
    console.log(this.login.value)
    this.userservice.signin(this.login.value).subscribe((data: any) => {
      console.log(data)
      this.userservice.userData.next(data)
      this.userservice.isLogInSubject.next(true)
      alert(`welcome ${data.username}`)
      this.router.navigate(["/cart"])
    }, (err) => {
      console.log(err)
      this.userservice.isLogInSubject.next(false)
      alert(`Signin failed `)

    })

  }
  get email() {
    return this.login.get('email')
  }
  get password() {
    return this.login.get('password')
  }

  ngOnInit(): void {
    this.userservice.isLogInSubject.next(false)
  }

}
