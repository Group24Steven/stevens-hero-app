import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PicsumService {
  private loremPicsumApiUrl = 'https://picsum.photos';
  private randomImageWidth = 480;
  private randomImageHeight = 270;

  constructor(private http: HttpClient) {}

  getRandomImage(): string {
    return `${this.loremPicsumApiUrl}/${this.randomImageWidth}/${this.randomImageHeight}`;
  }
}
