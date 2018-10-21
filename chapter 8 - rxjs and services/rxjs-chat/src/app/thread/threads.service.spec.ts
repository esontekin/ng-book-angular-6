import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { ThreadsService } from './threads.service';
import * as _ from 'lodash';

describe('ThreadsService', () => {
  it('should collect the Threads from Messages', () => {
    const nate: User = new User('Nate', '');
    const felipe: User = new User('Felipe', '');

    const t1: Thread = new Thread('t1', 'Thread 1', '');
    const t2: Thread = new Thread('t2', 'Thread 2', '');

    const m1: Message = new Message({
      author: nate,
      text: 'Hi!',
      thread: t1
    });

    const m2: Message = new Message({
      author: felipe,
      text: 'Where did you get taht hat?',
      thread: t1
    });

    const m3: Message = new Message({
      author: nate,
      text: 'Did you bring the briefcase?',
      thread: t2
    });

    const messagesService: MessagesService = new MessagesService();
    const service: ThreadsService = new ThreadsService(messagesService);

    service.threads
      .subscribe((threadIdx: { [key: string]: Thread }) => {
        const threads: Thread[] = _.values(threadIdx);
        const threadNames: string = _.map(threads, (t: Thread) => t.name)
          .join(', ');
          console.log(`=> threads (${threads.length}:${threadNames})`);
      });

    messagesService.addMessage(m1);
    messagesService.addMessage(m2);
    messagesService.addMessage(m3);
  });
});
