import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SharedService {

  private token = new BehaviorSubject('default');
  currentToken = this.token.asObservable();
  constructor() { }

  setToken(newToken: string) {
    this.token.next(newToken)
  }

}
