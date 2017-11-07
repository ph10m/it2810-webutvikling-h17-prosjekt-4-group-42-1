import { Component, OnInit, ViewChild} from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  user: object;
  isLoading = true;
  activeHero: string;
  @ViewChild("heroes") heroes:any;

  constructor(private auth: AuthService,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.auth.currentUser).subscribe(
      data => {
        this.user = data;
        this.activeHero = this.user['hero'];
        this.toggleHero();
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  save(user) {
    this.userService.editUser(user).subscribe(
      res => this.toast.setMessage('account settings saved!', 'success'),
      error => console.log(error)
    );
  }

  toggleHero() {
    console.log('expanding ' + this.activeHero);
    for (let hero of this.heroes.nativeElement.children) {
      let hero_name = hero.classList[1]; // e.g. [section, thrall]
      if (this.activeHero === hero_name) {
        hero.classList.add('active');
        this.activeHero = hero_name;
      }
      else {
        hero.classList.remove('active');
      }
    }
  }

  selectedHero(event) {
    this.activeHero = event.target.classList[1];
    console.log('clicked: ' + this.activeHero);
    this.toggleHero();
  }
}
