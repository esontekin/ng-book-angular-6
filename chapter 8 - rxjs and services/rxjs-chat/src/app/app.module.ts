import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ThreadsService } from './thread/threads.service';
import { UsersService } from './user/users.service';
import { MessagesService } from './message/messages.service';
import { ChatPageComponent } from './chat-page/chat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatNavBarComponent,
    FromNowPipe,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    MessagesService,
    ThreadsService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
