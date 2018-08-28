import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly username: string = 'username';

  login(user: string, password: string): boolean {
    if (user === 'user' && password == 'password') {
      localStorage.setItem(this.username, user);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem(this.username);
  }

  getUser(): any {
    return localStorage.getItem(this.username);
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
