import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  url = 'http://localhost:5000/auth/signin'
  signupurl = 'http://localhost:5000/auth/signup'
  userData = new BehaviorSubject<any>(0)
  isLogInSubject = new Subject<boolean>()
  public signin(data: any): Observable<any> {
    return this.httpClient.post(this.url, data, { withCredentials: true })

  }
  public signup(data: any): Observable<any> {

    return this.httpClient.post(this.signupurl, data)
  }
}


