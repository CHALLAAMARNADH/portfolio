// src/app/components/skills/skills.component.ts
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [];
  activeCategory: 'all' | 'ml' | 'java' | 'web' | 'tools' = 'all';
  animated = false;

  categories = [
    { id: 'all', label: 'All' },
    { id: 'ml', label: 'AI / ML' },
    { id: 'java', label: 'Java' },
    { id: 'web', label: 'Web' },
    { id: 'tools', label: 'Tools' }
  ];

  constructor(
    private portfolioService: PortfolioService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animated = true;
      }
    }, { threshold: 0.2 });
    observer.observe(this.el.nativeElement);
  }

  get filteredSkills(): Skill[] {
    return this.activeCategory === 'all'
      ? this.skills
      : this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: any): void {
    this.activeCategory = cat;
    this.animated = false;
    setTimeout(() => this.animated = true, 50);
  }

  getCategoryColor(category: string): string {
    const map: Record<string, string> = {
      ml: '#00ffb4', java: '#f97316', web: '#60a5fa', tools: '#a78bfa'
    };
    return map[category] || '#00ffb4';
  }
}
