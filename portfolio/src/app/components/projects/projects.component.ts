// src/app/components/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  activeFilter: 'all' | 'nlp' | 'ml' | 'fullstack' | 'java' = 'all';
  showAll = false;

  filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'nlp', label: 'NLP' },
    { id: 'ml', label: 'ML / AI' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

  get filteredProjects(): Project[] {
    const list = this.activeFilter === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === this.activeFilter);
    return this.showAll ? list : list.slice(0, 4);
  }

  get totalFiltered(): number {
    return this.activeFilter === 'all'
      ? this.projects.length
      : this.projects.filter(p => p.category === this.activeFilter).length;
  }

  setFilter(f: any): void {
    this.activeFilter = f;
    this.showAll = false;
  }

  getCategoryLabel(cat: string): string {
    const map: Record<string, string> = {
      nlp: 'NLP', ml: 'ML / AI', fullstack: 'Full Stack', java: 'Java'
    };
    return map[cat] || cat;
  }

  getCategoryColor(cat: string): string {
    const map: Record<string, string> = {
      nlp: '#00ffb4', ml: '#60a5fa', fullstack: '#f97316', java: '#a78bfa'
    };
    return map[cat] || '#00ffb4';
  }
}
