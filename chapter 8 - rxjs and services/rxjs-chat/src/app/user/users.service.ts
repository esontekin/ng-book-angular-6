import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UsersService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}
