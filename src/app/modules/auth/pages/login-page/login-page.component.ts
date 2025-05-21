import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  
  
  constructor(private asAuthService: AuthService) {}

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

  sendLogin() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      console.log('🙊 Petición de Validación enviada')
      this.asAuthService.sendsCredentials(email, password);        
    } else {
      console.log('🙊 Body Form is invalid');
    }
  }

}
