import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserUI } from 'src/app/models/ui-modules/user-model';
import { Roles } from 'src/app/models/api-models/roles-model';

@Component({
  selector: 'app-login-reactive-forms',
  templateUrl: './login-reactive-forms.component.html',
  styleUrls: ['./login-reactive-forms.component.css']
})
export class LoginReactiveFormsComponent implements OnInit{

  currentUser: UserUI = {
    id: '',
    email: '',
    token: '',
    username: '',
    role: Roles.User
  }
  renderer: any;
  el: any;

  constructor(private loginService : LoginService,
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private readonly router: Router){}

  ngOnInit(): void {

    document.body.className = "selectorLogin";
  }
ngOnDestroy(){
    document.body.className="";
  }

  loginForm = new FormGroup(
    {
      user:new FormControl(''),
      password:new FormControl(''),
    }
  )
  loginAdmin()
  {
    console.warn(this.loginForm.value);
  }
  onLogin(): void{
    console.log("Metoda apelata");
    this.loginService.getAuthToken(this.loginForm.value.user!, this.loginForm.value.password!)
    .subscribe(
      (successResponse) =>{
        this.snackbar.open('You have successfully logged!', undefined, {
          duration: 2000
        });
        this.currentUser = successResponse;
        localStorage.setItem('token', this.currentUser.token);
        console.log(this.currentUser.role);
        if (this.currentUser.role === 1)
        {
          console.log("admin")
          localStorage.setItem('role', 'admin');
          this.router.navigateByUrl('volunteers/admin');
        }
        else
        {
          localStorage.setItem('role', 'user');
          this.router.navigateByUrl('volunteers');
        }

      },
      (errorResponse) => {
        localStorage.setItem('token', '')
        this.snackbar.open('Credentials are incorrect!', undefined, {
          duration: 2000
        });
      }
    )

  }
  signOut(){
    localStorage.clear();
    this.snackbar.open('You have logged out!', undefined, {
      duration: 2000
    });
  }
}
