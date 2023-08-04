import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from 'src/objects/hero';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col">
      <span class="text-center my-5">Top Heroes:</span>
      <div class="mx-1">
        <a *ngFor="let h of topHeroes" [href]="'/hero/' + h.id" class="hero-button mx-1">{{h.name}}</a>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  topHeroes: Hero[] = [];
  constructor(private heroService: HeroService) {
    this.heroService.getAllHeroes().subscribe(
      (heroes: Hero[]) => {
        this.topHeroes = heroes.slice(heroes.length-4, heroes.length);
      },
      (error) => {
        console.error('Error fetching heroes:', error);
      }
    );
  }
}