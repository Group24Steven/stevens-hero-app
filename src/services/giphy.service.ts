import { Injectable } from '@angular/core';
import { GiphyRoot } from 'src/objects/giphy';
import axios from 'axios';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private giphyApiUrl = 'https://api.giphy.com/v1/gifs/search';
  private apiKey = 'GFB00wgdJ1EICBuULe2bsnfTqziSVx1Q';

  constructor(/*private http: HttpClient*/) {}
  async getRandomGif(): Promise<GiphyRoot> {
    const url = `${this.giphyApiUrl}?api_key=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }
  async getRandomGifBySearchTerm(searchTerm: string): Promise<GiphyRoot> {
    searchTerm = searchTerm.replace(' ', '_');
    const url = `${this.giphyApiUrl}?api_key=${this.apiKey}&q=${searchTerm}`;
    const response = await axios.get(url);
    return response.data;
  }
}
