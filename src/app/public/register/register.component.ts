import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
     private router: Router
     ) {
    // You don't need to initialize the form here if you plan to do it in ngOnInit.
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
    });
  }

  submit(): void {
    this.http.post("http://localhost:8000/api/admin/register", this.form.getRawValue()).subscribe(() => this.router.navigate(["/login"]))
  }
}
