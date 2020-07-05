import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpConfigService} from '../services/http-config.service'
import { HttpHeaders } from '@angular/common/http';
import {SharedService} from '../services/shared.service'
import { isNull } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpConfigService: HttpConfigService,
     private sharedService: SharedService) { }
  apertumLoginUrl = "https://apertum-interview.herokuapp.com/api/user/login";
   loginObject ={
    accountId : '--',
    pswd: '--'
  }
  userID: string;
  password: string;
  token: string;
  loginHeader = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };
  ngOnInit() {
    this.sharedService.currentToken.subscribe(token => this.token = token)
  }
  onButtonClick(){
    this.loginObject.accountId = this.userID;
    this.loginObject.pswd = this.password;
    console.log(this.loginObject);
    this.httpConfigService.postRequest(this.apertumLoginUrl,this.loginObject,this.loginHeader)
    .subscribe(response => {
      this.sharedService.setToken(response.token);
      console.log(response.message, response.status);
      if(this.token !== 'default' && this.token!== undefined)
      this.router.navigate(['user-list']);
    });
  }

}
