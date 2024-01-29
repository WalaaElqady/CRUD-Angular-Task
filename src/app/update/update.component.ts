import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    picture: new FormControl(null, [Validators.required]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router, private _ActivatedRoute: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this._AuthService.getCurrentData(id).subscribe((response) => {
      console.warn("result" + response);
    })  
  }
  updateUser(){
    this._AuthService.updateUser(this.updateForm.value,this._ActivatedRoute.snapshot.paramMap.get('id')).subscribe((response) => {
      this._Router.navigate(['/desktop']);
      
    })
  }
}
