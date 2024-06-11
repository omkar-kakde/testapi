import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  router = inject(Router);
  constructor(private user: UserService) { }

  loginform = new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl(''),

  })


  ngOnInit(): void {

  }

  login() {
    debugger;
    console.log(this.loginform.value);
    
    this.user.onLogin(this.loginform.value).subscribe((res: any) => {
      debugger;
      if (res.result) {
        localStorage.setItem('angulartikendata ', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashbaord')
      } else {
        alert(res.message)
      }
    },error=>{
      console.log("Omkar Testte tes - 1");
      console.log(error);
      console.log("Omkar Testte tes - 2");

       alert('wrong crendtuals')
    })

  }


}
