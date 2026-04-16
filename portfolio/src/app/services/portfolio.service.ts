// src/app/services/portfolio.service.ts
import { Injectable } from '@angular/core';
import { Project, Skill, Experience } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'NLP Amazon Review Analysis',
        description: 'Developed a REST API web application to classify Amazon product reviews .',
        tech: ['Python', 'NLP'],
        category: 'nlp',
        githubUrl: 'https://github.com/CHALLAAMARNADH/Amazon_Review_NLP',
        featured: true
      },
      {
        id: 2,
        title: 'Hospital Management',
        description: 'Developed a web-based application to manage hospital operations such as patient records and appointments.',
        tech: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JWT'],
        category: 'fullstack',
        githubUrl: 'https://github.com/CHALLAAMARNADH/hospital-management',
        featured: true
      },
      {
        id: 3,
        title: 'Ecommerce Website',
        description: 'Full-stack employee management system with Spring Boot backend and Angular frontend. Includes JWT auth, JPA/Hibernate ORM, and MySQL database.',
        tech: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JWT'],
        category: 'fullstack',
        githubUrl: 'https://github.com/CHALLAAMARNADH/ecommerce_back',
        liveUrl: '#',
        featured: true
      },
      {
        id: 4,
        title: 'Fish Disease Detection',
        description: 'Implemented CNN architectures including ResNet50 and EfficientNet for feature extraction.',
        tech: ['Python', 'Machine Learning', 'Deep Learning','Algorithms'],
        category: 'ml',
        githubUrl: 'https://github.com/CHALLAAMARNADH/Fish-Disease-Detection',
        featured: false
      },
      {
        id: 5,
        title: 'Face Mask',
        description: 'Developed a deep learning model to detect whether a person is wearing a face mask or not.',
        tech: ['Python', 'Machine Learning', 'Deep Learning','Algorithms'],
        category: 'ml',
        githubUrl: 'https://github.com/CHALLAAMARNADH/face_mask',
        featured: false
      },
      {
        id: 6,
        title: 'Text Summarizer (NLP)',
        description: 'Extractive text summarization using TF-IDF scoring and sentence ranking. Reduces long articles to key sentences automatically.',
        tech: ['Python', 'NLTK', 'scikit-learn', 'TF-IDF'],
        category: 'nlp',
        githubUrl: 'https://github.com/CHALLAAMARNADH/text_summarization',
        featured: false
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      // ML/AI
      { name: 'Python', level: 85, category: 'ml' },
      { name: 'Machine Learning', level: 80, category: 'ml' },
      { name: 'Deep Learning', level: 72, category: 'ml' },
      { name: 'NLP', level: 75, category: 'ml' },
      { name: 'TensorFlow / Keras', level: 68, category: 'ml' },
      { name: 'scikit-learn', level: 78, category: 'ml' },
      // Java
      { name: 'Java', level: 82, category: 'java' },
      { name: 'Spring Boot', level: 75, category: 'java' },
      { name: 'Spring MVC', level: 70, category: 'java' },
      { name: 'Hibernate / JPA', level: 68, category: 'java' },
      { name: 'Java Servlets', level: 72, category: 'java' },
      // Web
      { name: 'Angular', level: 70, category: 'web' },
      { name: 'TypeScript', level: 68, category: 'web' },
      { name: 'HTML / CSS', level: 75, category: 'web' },
      { name: 'REST APIs', level: 80, category: 'web' },
      // Tools
      { name: 'MySQL / SQL', level: 78, category: 'tools' },
      { name: 'Git / GitHub', level: 80, category: 'tools' },
      { name: 'Maven', level: 65, category: 'tools' },
      { name: 'Postman', level: 75, category: 'tools' },
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        company: 'Tata Consultancy Services (TCS)',
        role: 'Java Full Stack Developer (Trainee)',
        period: '2026 – Present',
        current: true,
        description: [
          'Assigned to Java Full Stack domain after completing internal training program',
          'Working with Spring Boot, Angular, Hibernate, and MySQL for enterprise applications',
          'Developed REST APIs with Spring MVC and consumed them via Angular frontend',
          'Independently studying AI/ML and NLP alongside full-stack development work'
        ]
      }
    ];
  }
}
