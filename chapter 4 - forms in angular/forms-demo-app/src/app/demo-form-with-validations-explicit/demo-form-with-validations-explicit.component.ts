;import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
  styleUrls: ['./demo-form-with-validations-explicit.component.css']
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value: ', form);
  }
}