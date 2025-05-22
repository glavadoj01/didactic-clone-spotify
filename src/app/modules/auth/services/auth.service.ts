import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL: String = environment.api

  constructor(private httpVar: HttpClient) { }

  sendsCredentials(emailInput: string, passwordInput: string): Observable<any> {
    const body = {
      email: emailInput,
      password: passwordInput
    }
    return this.httpVar.post(`${this.URL}/auth/login`, body)
  }
}
