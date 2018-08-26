import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute,
              private location: Location) {
    route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.spotifyService
      .getTrack(this.id)
      .subscribe(track => this.renderTrack(track));
  }

  back(): void {
    this.location.back();
  }

  private renderTrack(track: any): void {
    console.log('track: ' + JSON.stringify(track));
    this.track = track;
  }
}
