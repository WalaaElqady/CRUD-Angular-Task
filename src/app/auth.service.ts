import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appId= "64fc4a747b1786417e354f31";
  

  constructor(private _HttpClient: HttpClient) { }
  register(userData: object): Observable<any>
  {
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'app-id': this.appId
    })
    const options = {headers: headers };
    return this._HttpClient.post('https://dummyapi.io/data/v1/user/create' , userData, options);
  }
  getUsers(): Observable<any>{
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'app-id': this.appId
    })
    const options = {headers: headers };
    return this._HttpClient.get('https://dummyapi.io/data/v1/user' , options);
  }
  deleteUser(id: any): Observable<any>{
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'app-id': this.appId
    })
    const options = {headers: headers };
    return this._HttpClient.delete(`https://dummyapi.io/data/v1/user/${id}` , options);
    
}

getCurrentData(id: any): Observable<any>{
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'app-id': this.appId
  })
  const options = {headers: headers };
  return this._HttpClient.get(`https://dummyapi.io/data/v1/user/${id}` , options);
}
updateUser(user: any, id: any): Observable<any> {
  const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'app-id': this.appId
  })
  const options = {headers: headers };
  return this._HttpClient.put(`https://dummyapi.io/data/v1/user/${id}`, user,  options);

}
// getUserById(id: string): Observable<any> {
//   const headers = new HttpHeaders ({
//     'Content-Type': 'application/json',
//     'app-id': this.appId
//   })
//   const options = {headers: headers };
//   return this._HttpClient.get(`https://dummyapi.io/data/v1/user/${id}`, options);
// }
}