import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'singhkaushal500@gmail.com',
      link: 'mailto:singhkaushal500@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 93107 19903',
      link: 'tel:+919310719903'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'New Delhi, India',
      link: '#'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/kaushal-singh-a536101b3',
      link: 'https://linkedin.com/in/kaushal-singh-a536101b3'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.contactForm.controls;
  }
//will implement backend messaging feature later
  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      // Simulate form submission
      alert('Form submitted successfully!\n\n');
      this.contactForm.reset();
      this.isSubmitting = false;
      this.submitMessage = 'Your message has been sent successfully!';
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const minLength = field.errors['minlength'].requiredLength;
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${minLength} characters`;
      }
    }
    return '';
  }
}