import { Injectable } from '@angular/core';
import { filter, map, scan, publishReplay, refCount } from 'rxjs/operators';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

const initialMessages: Message[] = [];

type IMessageOperation = (messages: Message[]) => Message[];

@Injectable()
export class MessagesService {
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates
      .pipe(
        scan((messages: Message[],
             operation: IMessageOperation) => {
               return operation(messages);
             },
             initialMessages),
        publishReplay(1),
        refCount());

    this.create
      .pipe(map((message: Message): IMessageOperation => {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      }))
      .subscribe(this.updates);

    this.newMessages
      .subscribe(this.create);

    this.markThreadAsRead
      .pipe(map((thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map((message: Message) => {
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      }))
      .subscribe(this.updates);
  }

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages.pipe(filter(message => (message.thread.id === thread.id)
        && (message.author.id !== user.id)));
  }
}

export const messagesServiceInjectables: Array<any> = [
  MessagesService
];
