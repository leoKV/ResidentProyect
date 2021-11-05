import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth-services.service';
import { Auth } from 'src/app/auth/interfaces/auth';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styles: [`
  .container {
    margin: 10px;
  }
`]
})
export class HomePComponent implements OnInit {

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
