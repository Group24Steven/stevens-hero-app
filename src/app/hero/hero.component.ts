import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from 'src/objects/hero';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="['flex', 'items-center', 'gap-x-1', hidden ? 'hidden' : '']">
      <a class="flex items-center my-1 w-full hero-wrapper" [href]="'/hero/' + hero?.id">
        <p class="hero-id px-1">{{hero?.id}}</p>
        <p class="hero-name w-full px-2">{{hero?.name}}</p>
      </a>
      <button class="remove-hero-button" (click)="removeHero()">×</button>
    </div>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() hero: Hero | undefined;
  hidden = false;
  constructor(private heroService: HeroService) {}
  removeHero(): void {
    if (this.hero) {
      this.heroService.delete(this.hero.id).subscribe(
        (deletedHero: Hero) => {
          console.log('Hero removed:', deletedHero);
          // Handle any additional logic after removing the hero.
        },
        (error: string) => {
          console.error('Error removing hero:', error);
          // Handle error cases if necessary.
        }
      );
    }
    this.hidden = true;
  }
}