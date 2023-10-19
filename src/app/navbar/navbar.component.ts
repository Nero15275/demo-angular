import { Component, OnInit } from '@angular/core';
import { UserService } from '../servics/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userData: any
  isLogIn: boolean = false

  constructor(private userservice: UserService) {
    this.userservice.userData.subscribe(uData => {
      this.userData = uData

    })
    this.userservice.isLogInSubject.subscribe(loginfo => {
      this.isLogIn = loginfo
    })
  }



  ngOnInit(): void {
  }

}
