import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/user';
import { FauxauthenticationService } from '../fauxauthentication.service';
import { OrganicrouteService } from '../organicroute.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private fauxAuth: FauxauthenticationService,
    private routing: OrganicrouteService){}

  user:User = new User();
  userError?: string;
  // usernameError?: string;
  // passwordError?: string;

  loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  })

  ngOnInit(): void {
    // this.loginForm.valueChanges.subscribe({
    //   next:()=>{

    //     if(this.loginForm.pristine){
    //       this.usernameError = undefined;
    //       this.passwordError = undefined;
    //     } else {

    //       let username = this.loginForm.controls['username'];
    //       let password = this.loginForm.controls['password'];

    //       let uError = 'username cannot be blank!';
    //       let pError = 'password cannot be blank!';

    //     }

    //   }
    // })
  }

  login(){
    this.user.username = this.loginForm.value['username'];
    this.user.password = this.loginForm.value['password'];
    if(this.fauxAuth.authenticateToken(this.fauxAuth.authenticateUser(this.user))){
      this.userError = undefined;
      this.fauxAuth.setToken(this.fauxAuth.authenticateUser(this.user));
      this.routing.gotoDashboard();
    } else {
      this.userError = 'invalid credentials';
    }
  }

}
