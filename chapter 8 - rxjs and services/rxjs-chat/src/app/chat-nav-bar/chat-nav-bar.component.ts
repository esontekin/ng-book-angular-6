import { Message } from './../message/message.model';
import { Thread } from './../thread/thread.model';
import { combineLatest } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../message/messages.service';
import { ThreadsService } from '../thread/threads.service';
import * as _ from 'lodash';

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number;

  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService
  ) { }

  ngOnInit(): void {
    this.messagesService.messages.pipe(
      combineLatest(
        this.threadsService.currentThread,
        (messages, currentThread) => [currentThread, messages]
      )
    ).subscribe(
      ([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount = _.reduce(
          messages,
          (sum, message) => {
            const messageIsInCurrentThread: boolean = message.thread &&
              currentThread &&
              (currentThread.id === message.thread.id);

            if (message && !message.isRead && !messageIsInCurrentThread) {
              sum++;
            }

            return sum;
          }, 0);
    });
  }
}
