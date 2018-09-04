import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
