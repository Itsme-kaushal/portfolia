import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '350+', label: 'DSA Problems Solved' },
    { number: '1650', label: 'CodeChef Rating' }
  ];

  experiences = [
    {
      title: 'Backend Engineer Intern',
      company: 'Flydocs, New Delhi',
      period: 'Jan 2025 - Present',
      description: 'Built and optimized REST APIs using Nest.js, reducing latency by 50%. Enhanced backend architecture for performance and scalability under high traffic.'
    },
    {
      title: 'Cyber Security Intern',
      company: 'CDAC Noida',
      period: 'May 2024 - Jun 2024',
      description: 'Designed HTML Injection Defense using input validation and output encoding. Gained experience in OWASP principles and secure coding for web apps.'
    },
    {
      title: 'Subject Expert - C++ and Physics',
      company: 'FILO, New Delhi',
      period: 'Feb 2023 - Apr 2023',
      description: 'Delivered technical guidance and live solutions to international students. Improved pedagogy, real-time problem solving, and remote mentoring skills.'
    }
  ];

  ngOnInit(): void {
  }
}