// src/app/components/hero/hero.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  roles = ['ML Engineer', 'Java Full Stack Dev', 'NLP Enthusiast', 'Gen AI'];
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timer: any;

  ngOnInit(): void {
    this.typeEffect();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  typeEffect(): void {
    const current = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.displayText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      speed = 400;
    }

    this.timer = setTimeout(() => this.typeEffect(), speed);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
