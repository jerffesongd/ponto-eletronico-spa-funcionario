import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private router: Router) {
    
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]), 
      password: new FormControl('', [Validators.required]), 
    });
  }  


  onSubmit() {

    if (this.loginForm.valid) {
      this.router.navigate(['/registro-ponto']);
    } else {
      alert('Por favor, insira um nome de usuário e senha válidos.');
    }
  }

  onForgotPassword() {
    console.log('Esqueceu a senha acionado');
  }
}