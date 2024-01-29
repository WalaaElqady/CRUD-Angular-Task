import { Component, NgModule, OnInit, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { getLocalePluralCase } from '@angular/common';
import { Users } from './../users';



@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent implements OnInit{
  myData: any[] = [];
  term: string = "";
  
  constructor(private _AuthService:AuthService, private _Router:Router,
   ){}
ngOnInit(): void {
 this.getUsers();
}

getUsers(){
  this._AuthService.getUsers().subscribe((response)=>{
    this.myData = this.mappingUsers(response.data);
  })
}
mappingUsers(data:any){
  let newUsers = data.map((user:any)=>{
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    }
  })
    return newUsers;

}

deleteUser(id:any){
  this._AuthService.deleteUser(id).subscribe((response)=>{
    console.log("deleted");
    this.getUsers();
  })
}
updateUser(id: any) {
  this._Router.navigate(['/register/', id]);
}

} 

