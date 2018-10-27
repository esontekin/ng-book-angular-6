import { UsersService } from './../user/users.service';
import { MessagesService } from './../message/messages.service';
import { Message } from './../message/message.model';
import { Thread } from './../thread/thread.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { User } from '../user/user.model';
import { ThreadsService } from '../thread/threads.service';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService,
    public el: ElementRef
  ) { }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe(
      thread => this.currentThread = thread
    );

    this.usersService.currentUser.subscribe(
      user => this.currentUser = user
    );

    this.messages.subscribe(
      messages => setTimeout(() => this.scrollToBottom())
    );
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void {
    const message: Message = this.draftMessage;
    message.author = this.currentUser;
    message.thread = this.currentThread;
    message.isRead = true;
    this.messagesService.addMessage(message);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
