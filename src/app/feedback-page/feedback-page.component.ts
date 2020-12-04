import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }
  feedbackForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      feedback: ['', Validators.required],
    });

    this.feedbackForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  get f() { return this.feedbackForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      localStorage.setItem('feedback', JSON.stringify(this.feedbackForm.value));
      const existingFormGetDataEntries = JSON.parse(localStorage.getItem('feedback'));
      console.log('localStorage get values', existingFormGetDataEntries);
      alert('Submitted successfully...!');
    }
  }
  BackPage() {
     this.router.navigate(['login']);
    }
  }


    // const newFeedbackData = {
    //   name: this.feedbackForm.value.name,
    //   email: this.feedbackForm.value.email,
    //   mobile: this.feedbackForm.value.mobile,
    //   feedback: this.feedbackForm.value.feedback
    // };
    // this.productService.postFeedback(newFeedbackData).subscribe(data => {
    //   alert('Submitted successfully...!');
    //   this.feedbackForm.reset();
    // });



