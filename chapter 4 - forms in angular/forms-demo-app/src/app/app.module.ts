import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku-component/demo-form-sku.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
