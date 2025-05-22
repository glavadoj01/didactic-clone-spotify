import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})
  errorSession: boolean = false
  
  
  constructor(private asAuthService: AuthService, private cookieSrv: CookieService, private routerSrv: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      }
    );
  }
  /** emailOK: test@test.com
   *  passwordOK: 12345678
   */
  sendLogin() {
    if (this.formLogin.valid) {
      this.errorSession = false
      const email = this.formLogin.value.email
      const password = this.formLogin.value.password

      this.asAuthService.sendsCredentials(email, password)
        .subscribe({
          next: (responseOk) => {
            this.cookieSrv.set('tokenVar', responseOk.tokenSession, 1, '/')
            console.log('🙊 Petición de Validación enviada', responseOk)
            this.routerSrv.navigate(['/', 'tracks'])
          },
          error: (error) => {
            this.errorSession = true
            console.log('🙊 Error en la petición de Validación', error)
          }
        })
      
    } else {
      console.log('🙊 Body Form is invalid');
    }
  }

}
