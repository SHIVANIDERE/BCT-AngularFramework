import { Injectable } from '@angular/core';
import { DummyService } from './dummy.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user
  constructor(private service: DummyService) { 

  }
  login(user){
    let users = this.service.user;
    for (let i = 0;i<users.length;i++)
    {
      if(users[i]['username']==user['username'] && users[i]['password']==user['password'])
      {
        this.user = user['username'];
        return true;
      }
    }
    return false;
  }
}
