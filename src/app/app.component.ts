import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from './data-models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'User Grid';
  subscription: Subscription;
  users: User[];
  filteredUsers: User[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.subscription = this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = this.users;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  searchChanged(funcs: Function[]) {
    if (this.users) {
      let filteredUsers: User[] = [];
      funcs.forEach(func => filteredUsers = [...filteredUsers, ...func.apply(this, [this.users])]);
      this.filteredUsers = Array.from(new Set(filteredUsers));
    }
    if (funcs.length === 0) {
      this.filteredUsers = this.users;
    }
  }
}
