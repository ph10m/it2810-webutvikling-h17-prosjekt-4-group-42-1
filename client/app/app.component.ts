import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  activeHero: string;
  constructor(public auth: AuthService, private userService: UserService) { }

  getUser() {
    this.userService.getUser(this.auth.currentUser).subscribe(
      data => {
        this.activeHero = data['hero'];
      }
    );
  }

}
