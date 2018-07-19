import { Component, OnInit } from '@angular/core';
import {SearchResult} from "./search-result.model";
import {YouTubeSearchService} from "./you-tube-search.service";

@Component({
  selector: 'app-you-tube-search',
  template: `
  <input type="text" c;ass="form-control" placeholder="Search" autofocus>
  `
})
export class YouTubeSearchComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) { }

  ngOnInit() {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup');
  }
}
