import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(private route: ActivatedRoute,
              private spotifyService: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotifyService
      .getAlbum(this.id)
      .subscribe((res: any) => this.renderAlbum(res));
  }

  back(): void {
    this.location.back();
  }

  renderAlbum(album: any): void {
    this.album = album;
  }
}
