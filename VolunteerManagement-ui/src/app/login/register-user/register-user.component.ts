import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUser } from 'src/app/models/ui-modules/createUser.model';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private registerService : RegisterService,
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private readonly router: Router){}
  ngOnInit(): void {

    document.body.className = "selectorLogin";
  }
ngOnDestroy(){
    document.body.className="";
  }
  createUser : CreateUser = {
    username: '',
    password: '',
    email: ''
  }
  registerForm = new FormGroup(
    {
      username:new FormControl(''),
      password:new FormControl(''),
      email:new FormControl('')
    }
  )

  onRegister(): void{
    this.createUser.username = this.registerForm.value.username!;
    this.createUser.password = this.registerForm.value.password!;
    this.createUser.email = this.registerForm.value.email!;
    console.log(this.createUser.password);
    this.registerService.registerUser(this.createUser)
    .subscribe(
      (successResponse) => {
        this.snackbar.open('You have successfully register!', undefined, {
          duration: 2000
        });

      },
      (errorResponse) => {
        localStorage.setItem('token', '')
        this.snackbar.open('Something went wrong!', undefined, {
          duration: 2000
        });
      }
    )

  }

}
