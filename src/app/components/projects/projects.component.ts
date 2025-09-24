import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      id: 1,
      title: 'BlogVerse - Blogging Platform',
      description: 'A secure multi-user blogging platform with authentication and authorization. Built RESTful APIs to support full CRUD operations with role-based access control for secure content management.',
      image: 'assets/blogging.jpg',
      technologies: ['Nest.js', 'PostgreSQL', 'JWT', 'TypeORM', 'REST API'],
      category: 'Web Application',
      githubUrl: 'https://github.com/itsme-kaushal/NEST-PROJECT',
      liveUrl: '#',
      featured: false,
    },
    {
      id: 2,
      title: 'Flash Chat - Real-Time Chat App',
      description: 'A full-stack chat application with real-time messaging capabilities. Integrated Firebase Authentication and Firestore for dynamic updates and secure user interaction.',
      image: 'assets/flashchat.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Authentication'],
      category: 'Mobile App',
      githubUrl: 'https://github.com/Itsme-kaushal/itsme-kaushal.github.io',
      liveUrl: 'https://itsme-kaushal.github.io',
      featured: true
    },
    {
      id: 3,
      title: 'REST API Optimization',
      description: 'Optimized REST APIs using Nest.js, achieving 50% latency reduction. Enhanced backend architecture for better performance and scalability under high traffic conditions.',
      image: 'assets/Rest-api.png',
      technologies: ['Nest.js', 'PostgreSQL', 'Performance Optimization', 'Caching'],
      category: 'Backend',
      githubUrl: 'https://github.com/kaushalsingh/api-optimization',
      liveUrl: '#',
      featured: false
    },

    {
      id: 4,
      title: 'DSA Problem Solutions',
      description: 'Comprehensive collection of 350+ Data Structures and Algorithms problem solutions across LeetCode, GeeksforGeeks, and Coding Ninjas platforms.',
      image: 'assets/grind-75.png',
      technologies: ['Python', 'C++', 'Algorithms', 'Data Structures'],
      category: 'Algorithms',
      githubUrl: 'https://github.com/Itsme-kaushal/cp',
      liveUrl: 'https://leetcode.com/kaushalsingh',
      featured: true,
    }
  ];

  filteredProjects = this.projects;
  categories = ['All', 'Web Application', 'Mobile App', 'Backend', 'Algorithms'];
  selectedCategory = 'All';

  

  filterProjects(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  openProject(url: string): void {
    window.open(url, '_blank');
  }
}