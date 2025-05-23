import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: CookieService, useValue: {} },
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  // Test especificos
  

  // Test para verificar que el formulario se inicializa correctamente
  it('🟡👉 should react of formLogin', () => {
    // Arrange
    const mockBadCredentials = {
      email: 'a0a.a',
      password: '123'  
    };
    const emailControl = component.formLogin.get('email');
    const passwordControl = component.formLogin.get('password');

    // Act
    emailControl.setValue(mockBadCredentials.email);
    passwordControl.setValue(mockBadCredentials.password);

    // Assert
    expect(component.formLogin.valid).toBeFalse();

  });

  it('🟡👉 El boton deberia renderizar: Iniciar sesión', () =>{
    // Arrange
    const buttonElement = fixture.debugElement.query(By.css('.form-action button'));
    const expectedText = 'Iniciar sesión';
    const innerText = buttonElement.nativeElement.innerText;

    // Act
    fixture.detectChanges();

    // Assert
    expect(innerText).toEqual(expectedText);
  });


});
