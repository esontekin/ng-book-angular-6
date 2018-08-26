import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(private spotfiyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route
      .queryParams
      .subscribe(params => this.query = params['query'] || '');
  }

  ngOnInit(): void {
    this.search();
  }

  submit(query: string): void {
    this.router.navigate(['search'], {
      queryParams: {
        query: query
      }
    }).then(() => this.search());
  }

  // get hasResults(): boolean {
  //   console.log('hasResults: ' + Object.values(this.results));
  //   return !isUndefined(this.results) && !!Object.values(this.results).length;
  // }

  private search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotfiyService
      .searchTrack(this.query)
      .subscribe(results => this.renderResults(results));
  }

  private renderResults(results: any): void {
    this.results = null;
    if (results && results.tracks && results.tracks.items) {
      this.results = results.tracks.items;
    }
  }

}
