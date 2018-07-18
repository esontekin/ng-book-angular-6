;import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-short-hand',
  templateUrl: './demo-form-with-validations-short-hand.component.html',
  styleUrls: ['./demo-form-with-validations-short-hand.component.css']
})
export class DemoFormWithValidationsShortHandComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value: ', form);
  }
}