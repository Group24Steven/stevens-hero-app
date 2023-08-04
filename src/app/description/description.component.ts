import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/objects/hero';
import { HeroService } from 'src/services/hero.service';
import { GiphyService } from 'src/services/giphy.service';
import { PicsumService } from 'src/services/picsum.service';
import { Original } from 'src/objects/giphy';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-2 gap-5" *ngIf="hero != emptyHero">
      <div>
        <img class="mt-5" [src]="randomGifData?.url" width="480" height="270">
      </div>
      <div>
        <h1><b>Details of hero:</b></h1><br>
        <p>id: {{hero.id}}</p><br>
        <p>name: {{hero.name}}</p><br>
        <p *ngIf="hero.description != undefined">description: {{hero.description}}</p>
        <br>
        <br>
        <button class="link-button bg-cyan-500 shadow-lg shadow-cyan-500/50" (click)="this.location.back()">Back</button>
      </div>
    </div>
    <p *ngIf="hero == emptyHero">No such hero found.</p>
  `,
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent {
  emptyHero = new Hero();
  hero = new Hero();
  randomGifData: Original | undefined;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private heroService: HeroService,
    private giphyService: GiphyService,
    private picsumService: PicsumService
  ) {
    this.route.params.subscribe((params) => {
      this.heroService.getById(params['id']).subscribe(
        async (hero: Hero) => {
          this.hero = hero;
          this.randomGifData = await this.getRandomGiphyBySearchTerm(hero.name);
        },
        (error) => {
          console.error('Error fetching hero:', error);
        }
      );
    });
  }

  async getRandomGiphyBySearchTerm(searchTerm: string): Promise<Original | undefined> {
    try {
      const response = await this.giphyService.getRandomGifBySearchTerm(searchTerm);
      return response.data[0].images.original;
    } catch (error) {
      console.error('Error fetching random gif by search term:', error);
      return undefined;
    }
  }
  getRandomImage(): string | undefined {
    try {
      const response = this.picsumService.getRandomImage();
      return response;
    } catch (error) {
      console.error('Error fetching random gif by search term:', error);
      return undefined;
    }
  }
}