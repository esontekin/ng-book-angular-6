import { UsersService } from './../user/users.service';
import { Message } from './../message/message.model';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input()
  message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(
    public usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.currentUser.subscribe(
      user => {
        this.currentUser = user;
        if (this.message.author && user) {
          this.incoming = this.message.author.id !== user.id;
        }
      }
    );
  }
}
