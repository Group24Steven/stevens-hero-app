import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { Hero } from 'src/objects/hero';
import { HeroComponent } from "../hero/hero.component";
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
      <div class="flex">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-10">
          <app-hero *ngFor="let h of heroes" [hero]="h"></app-hero><br>
        </div>
        <div class="flex flex-col m-5">
          <div class="flex flex-col items-center">
            <input class="m-1 w-full bg-white dark:bg-black" [(ngModel)]="heroName" placeholder="Hero name eg. thor">
            <input class="w-full bg-white dark:bg-black" [(ngModel)]="heroDescription" placeholder="Description of hero">
            <div class="flex mt-5">
              <button class="link-button mx-3 bg-cyan-500 shadow-lg shadow-cyan-500/50" (click)="addHero()">Add new hero</button>
              <button class="link-button bg-cyan-500 shadow-lg shadow-cyan-500/50" (click)="this.location.back()">Back</button>
            </div>
          </div>
        </div>
      </div>
    `,
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, HeroComponent, FormsModule]
})
export class ListComponent {
  heroName: string = '';
  heroDescription:string = '';

  heroes: Hero[] = [];
  constructor(public location: Location, private heroService: HeroService) {
    this.heroService.getAllHeroes().subscribe(
      (heroes: Hero[]) => {
        this.heroes = heroes;
      },
      (error) => {
        console.error('Error fetching heroes:', error);
      }
    );
  }
  isEmptyOrWhiteSpace(str: string) {
    return str.trim() === '';
  }
  addHero(): void {
    if(!this.isEmptyOrWhiteSpace(this.heroName)) {
      if(this.isEmptyOrWhiteSpace(this.heroDescription)) {
        this.heroDescription = '‎';
      }
      const newHero: Hero = new Hero({ 
        id: (this.heroes[this.heroes.length-1].id + 1), 
        name: this.heroName, 
        description: this.heroDescription 
      });
      this.heroService.getAllHeroes().subscribe(
        (heroes: Hero[]) => {
          this.heroes = heroes;
        },
        (error) => {
          console.error('Error fetching heroes:', error);
        }
      );
      if(this.heroes.filter(h => h.name === this.heroName).length > 0) {
        console.log("Hero creation aborted due to already existing hero.");
        alert("A hero with such a name already exists.");
        return;
      }
      this.heroService.create(newHero).subscribe(
        (createdHero: Hero) => {
          this.heroes.push(newHero);
          console.log('New hero created:', createdHero);
          alert('New hero successfully inserted.');
        },
        (error: string) => {
          console.error('Error adding hero:', error);
        }
      );
    } else {
      console.log('Hero creation aborted due to blank hero name.');
      alert('New heroes require a hero name!');
    }
  }
}