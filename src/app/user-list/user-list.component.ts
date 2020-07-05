import { Component, OnInit } from '@angular/core';
import { HttpConfigService } from '../services/http-config.service';
import {SharedService} from '../services/shared.service'
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  apertumGetUserListUrl = "https://apertum-interview.herokuapp.com/api/users";
  userListOptions = {
    headers: new HttpHeaders({
      'Authorization': 'my-auth-token'
    })
  };
  token;
  userList: any[];
  theFilteredList: any[];
  constructor(private httpConfigService: HttpConfigService, private sharedService: SharedService) { }

  ngOnInit(){
    this.sharedService.currentToken.subscribe(token => this.token = token)
    this.userListOptions.headers = this.userListOptions.headers.set('Authorization', 'Bearer'+' '+ this.token);
    this.httpConfigService.getRequest(this.apertumGetUserListUrl,this.userListOptions).subscribe(response => {
      console.log(response);
      this.userList = response;
      this.theFilteredList = response;
    });
  }
  filterData(){
    this.theFilteredList = this.userList.filter(data => 
      {
        let fullName: string = data.firstName+data.lastName;
        return data.age >= 20 && data.age < 30 && fullName.length+1>=10
      });
  }

}
