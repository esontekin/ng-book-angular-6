import {
  Component,
} from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: string;

  constructor(private userService: UserService) {
  }

  signIn(): void {
    this.userService.setUser({
      name: 'User Name'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }
}
