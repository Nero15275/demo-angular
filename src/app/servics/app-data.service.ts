import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private appData = {
    loginStatus: false
  };

  private subject: BehaviorSubject<any> = new BehaviorSubject(this.appData);
  constructor() { }

  public getLoginSatus(): Observable<any> {
    return this.subject;
  }

  public setAppData(data: any) {
    this.appData = {
      ...this.appData, ...data
    }
    this.subject.next(this.appData);
  }

}
