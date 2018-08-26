import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(private route: ActivatedRoute,
              private spotifyService: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotifyService
      .getArtist(this.id)
      .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.location.back();
  }

  renderArtist(artist: any): void {
    this.artist = artist;
  }
}
