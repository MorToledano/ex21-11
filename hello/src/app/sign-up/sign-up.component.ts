import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private authService:AuthService) { }

  onSubmit(){
    this.authService.SingUp(this.email,this.password);
  }

  ngOnInit(): void {
  }

}
