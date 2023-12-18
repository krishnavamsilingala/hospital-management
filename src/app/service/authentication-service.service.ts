import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginFormClass } from '../model/LoginFormClass';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  //private base='https://5aea-106-206-52-90.ngrok-free.app';
      private base='http://localhost:9092';

  constructor(private httpClient: HttpClient) { }

  authenticate(userObj:LoginFormClass): Observable<any> {
    return this.httpClient.post<any>(this.base+'/api/login',userObj);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token');
    return !(user === null || user ==='');
  }

}

// .pipe(
//   map(
//     userData => {
//      console.log("authenticatio done");
//      sessionStorage.setItem('username',userObj.username);
//      let tokenStr= 'Bearer '+userData.token;
//      sessionStorage.setItem('token', tokenStr);
//      return userData;
//     }
//   )

//  );
