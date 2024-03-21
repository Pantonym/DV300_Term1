import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: AuthService, private router: Router) { }

  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    // Validation
    if (this.login.value.email != "" && this.login.value.password != "") {

      //Call Auth Service
      this.service.loginUser(this.login.value.email!, this.login.value.password!)
        .subscribe((success) => {

          // if login is successful, navigate to inventory
          if (success) {
            this.router.navigateByUrl("/warehouses/1")
          } else {
            console.log("Add Validation");
          }

        })

    }
  }

}
