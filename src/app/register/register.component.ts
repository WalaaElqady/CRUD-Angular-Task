import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService, private _Router:Router
    ) { }



  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    picture: new FormControl(null, [Validators.required]),
  });

  submitRegister(formInfo:FormGroup)
  {
    this._AuthService.register(formInfo.value).subscribe((response) => {

      
        this._Router.navigate(['/desktop']);
        // console.log(response);
      
      
    })
  }
}


