import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth-services.service';
import { Auth } from 'src/app/auth/interfaces/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
    h1{
      font-family: 'Resident Evil', arial;
      font-size: 40px;
      color: #c91919;
    }
  `]
})
export class HomeComponent implements OnInit {

  get auth() {
    return this.authService.auth;
  }

  constructor( private router: Router,
               private authService: AuthService ) { }

  ngOnInit(): void {
  }
  logout() {
    this.router.navigate(['./auth']);
  }

}
