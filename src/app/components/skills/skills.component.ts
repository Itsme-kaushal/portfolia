import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  technicalSkills = [
    { name: 'Python', percentage: 90, icon: 'fab fa-python', color: '#3776ab' },
    { name: 'C++', percentage: 85, icon: 'fas fa-code', color: '#00599c' },
    { name: 'JavaScript', percentage: 80, icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'Nest.js', percentage: 88, icon: 'fas fa-server', color: '#e0234e' },
    { name: 'Flutter', percentage: 82, icon: 'fas fa-mobile-alt', color: '#02569b' },
    { name: 'PostgreSQL', percentage: 75, icon: 'fas fa-database', color: '#336791' },
    { name: 'Firebase', percentage: 80, icon: 'fas fa-fire', color: '#ffca28' },
    { name: 'Git', percentage: 85, icon: 'fab fa-git-alt', color: '#f05032' }
  ];

  tools = [
    { name: 'Git & GitLab', icon: 'fab fa-git-alt' },
    { name: 'JIRA', icon: 'fab fa-jira' },
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'Firestore', icon: 'fas fa-database' },
    { name: 'PostgreSQL', icon: 'fas fa-server' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'REST APIs', icon: 'fas fa-exchange-alt' },
    { name: 'TypeORM', icon: 'fas fa-layer-group' }
  ];

  certifications = [
    {
      name: 'CodeChef 2 Star',
      issuer: 'CodeChef',
      year: '2024',
      icon: 'fas fa-star'
    },
    {
      name: 'Cyber Security Training',
      issuer: 'CDAC Noida',
      year: '2024',
      icon: 'fas fa-shield-alt'
    },
    {
      name: 'DSA Expert (350+ Problems)',
      issuer: 'LeetCode & GFG',
      year: '2024',
      icon: 'fas fa-code'
    }
  ];

  ngOnInit(): void {
    this.animateSkillBars();
  }

  animateSkillBars(): void {
    // This would typically be implemented with intersection observer
    // For now, we'll trigger after component loads
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar: any) => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
      });
    }, 500);
  }
}