import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  static BASE_URL: string = `https://api.spotify.com/v1`;

  constructor(private http: HttpClient) { }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }

  private query(url: string, params?: Array<string>): Observable<any[]> {
    let queryUrl: string = `${SpotifyService.BASE_URL}${url}`;

    if (params) {
      queryUrl = `${queryUrl}?${params.join('&')}`
    }

    const apiKey: string = environment.spotifyApiKey;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${apiKey}`
    });
    const options = {
      headers: headers
    };

    return this.http.get<any[]>(queryUrl, options);
  }

  private search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }
}
