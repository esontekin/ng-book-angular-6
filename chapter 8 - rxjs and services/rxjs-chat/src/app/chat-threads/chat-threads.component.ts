import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../thread/threads.service';

@Component({
  selector: 'chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent {
  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) {
    this.threads = this.threadsService.orderedThreads;
  }
}
