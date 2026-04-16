// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;
  loading = false;
  currentYear = new Date().getFullYear();

  contactLinks = [
    {
      label: 'GitHub',
      value: 'github.com/amarnadh',
      url: 'https://github.com/CHALLAAMARNADH',
      icon: 'gh'
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/amarnadh-challa-79773026a/',
      url: 'https://www.linkedin.com/in/amarnadh-challa-79773026a/',
      icon: 'li'
    },
    {
      label: 'Email',
      value: 'amarnadhamarnadh206@gmail.com',
      url: 'mailto:amarnadhamarnadh206@gmail.com',
      icon: 'em'
    }
  ];

  onSubmit() {
    if (!this.name || !this.email || !this.message) return;
    this.loading = true;


    // Simulate form submission (replace with Formspree/EmailJS)
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.name = '';
      this.email = '';
      this.message = '';
    }, 1200);
  }

  reset() {
    this.submitted = false;
  }
}
