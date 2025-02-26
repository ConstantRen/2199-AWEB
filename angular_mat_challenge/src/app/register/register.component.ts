import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSliderModule, 
    MatRadioModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatTooltipModule, 
    MatSnackBarModule, 
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formdata: FormGroup;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  darkMode = false;

  constructor(private fb: FormBuilder) {
    this.formdata = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(8), 
        this.passwordValidator
      ]),
      gender: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required, this.dateOfBirthValidator]),
      address: new FormControl(''),
      angularSkillLevel: new FormControl(5)
    });
  }

  // Custom Password Validator
  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;
    // Check if password starts with a letter and contains only alphanumeric characters
    if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  // Custom Date of Birth Validator (Only allows users born in 2006 or earlier)
  dateOfBirthValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = new Date(control.value);
    const currentYear = new Date().getFullYear();
    if (value.getFullYear() > currentYear - 18) {
      return { invalidDOB: true };
    }
    return null;
  }

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    address: string;
    birthDate: Date;
    angularSkillLevel: number;
  }) {
    this.submitted = true;
    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log('Form is not valid!');
    }
  }

  // Toggle between Light and Dark Mode
  toggleMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
