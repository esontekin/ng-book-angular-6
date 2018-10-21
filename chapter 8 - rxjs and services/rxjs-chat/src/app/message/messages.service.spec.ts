import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from './message.model';
import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  it('should test', () => {
    const user: User = new User('Nate', '');
    const thread: Thread = new Thread('t1', 'Nate', '');
    const m1: Message = new Message({
      author: user,
      text: 'Hi!',
      thread: thread
    });

    const m2: Message = new Message({
      author: user,
      text: 'Bye!',
      thread: thread
    });

    const service: MessagesService = new MessagesService();
    service.newMessages
      .subscribe(message => console.log('=> newMessages: ' + message.text));
      service.messages
        .subscribe(messages => console.log('=> messages: ' + messages.length));

    service.addMessage(m1);
    service.addMessage(m2);
  });
});
