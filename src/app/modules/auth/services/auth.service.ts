import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor() { }

  sendsCredentials(email: string, password: string) {
    console.log('🙊🫵👉Body: ', { email, password });
  }
}
