import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a href="/">
      <h1 class="text-3xl font-bold">
        Tour of Heroes
      </h1>
    </a>
    <br>
    <div>
      <a class="link-button mx-1" href="/dashboard" routerLink="/dashboard" routerLinkActive="active" ariaCurrentWhenActive="page">Dashboard</a>
      <a class="link-button" href="/heroes" routerLink="/heroes" routerLinkActive="active" ariaCurrentWhenActive="page">Heroes</a>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}