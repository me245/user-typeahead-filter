import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

import { User } from './data-models/user';
import { UserJSON } from './data-models/userJSON';

@Injectable()
export class UsersService {
  private usersSource: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.http.get<UserJSON[]>('assets/users.json').subscribe(usersJson => {
      const users: User[] = [];
      usersJson.forEach(user => users.push(User.fromJSON(user)));
      this.usersSource.next(users);
    });
  }

  getUsers(): Observable<User[]> {
    return this.usersSource.asObservable();
  }

  getUser(id: number): Observable<User> {
    const user = this.usersSource.getValue().find(usr => usr.id === id);
    return Observable.of(user);
  }
}
