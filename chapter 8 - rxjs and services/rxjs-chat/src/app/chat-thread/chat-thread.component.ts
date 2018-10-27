import { Thread } from './../thread/thread.model';
import { Component, OnInit, Input } from '@angular/core';
import { ThreadsService } from '../thread/threads.service';

@Component({
  selector: 'chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {
  @Input()
  thread: Thread;

  selected: boolean = false;

  constructor(
    public threadsService: ThreadsService
  ) { }

  ngOnInit(): void {
    this.threadsService.currentThread.subscribe(
      currentThread => {
        this.selected = currentThread && this.thread &&
          (currentThread.id === this.thread.id);
      }
    );
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
