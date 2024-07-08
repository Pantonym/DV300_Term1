import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: string | null = null; // Initialize error message variable

  sliderLeftValue: number = 0;
  sliderRightValue: number = 100;

  constructor(private service: AuthService, private router: Router) { }

  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    slider_left: new FormControl(''),
    slider_right: new FormControl('')
  })

  onSubmit() {

    // Get the values of the sliders and convert them to numbers
    const sliderLeftValue = +this.login.value.slider_left!;
    const sliderRightValue = +this.login.value.slider_right!;

    if (sliderLeftValue === 100 && sliderRightValue === 0) {
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

    } else {
      this.errorMessage = "Competency Test Failed."
    }

  }

}