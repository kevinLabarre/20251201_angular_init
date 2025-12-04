import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from 'node:process';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  get loginError(): string | false {
    const loginErrors = this.loginForm.get("login")!.errors

    if (loginErrors) {
      if (loginErrors['required']) {
        return 'Login obligatoire'
      } else if (loginErrors['email']) {
        return 'Email obligatoire'
      }
    }

    return false
  }

  get passwordError(): string | false {
    const passwordErrors = this.loginForm.get("password")!.errors

    if (passwordErrors) {
      if (passwordErrors['required']) {
        return 'Mot de passe obligatoire'
      }
    }

    return false
  }

  get loginTouched(): boolean {
    return this.loginForm.get("login")!.touched
  }

  get passwordTouched(): boolean {
    return this.loginForm.get("password")!.touched
  }

  handleSubmit() {
    // if(this.loginForm.invalid){
    //   return
    // }

    if (this.loginForm.valid) {
      // Traitement du résultat
      console.log(this.loginForm.value)
    } else {
      this.loginForm.markAllAsTouched()
    }
  }

}
