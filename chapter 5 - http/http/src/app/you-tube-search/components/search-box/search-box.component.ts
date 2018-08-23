import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';
import { YouTubeSearchService } from '../../services/you-tube-search.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, switchAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtubeSearchService: YouTubeSearchService,
              private elementRef: ElementRef) { }

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value), // extract the value of the input
      filter((text: string) => text.length > 1), // filter out if empty
      debounceTime(250), // only one every 250ms
      tap(() => this.loading.emit(true)), // enable loading
      // search, discarding old events if new input comes in 
      map((query: string) => this.youtubeSearchService.search(query)),
      switchAll())
    // act on the return of the stream
    .subscribe(
      (results: SearchResult[]) => {
        // on success
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        // on error
        console.error(err);
        this.loading.emit(false);
      },
      () => {
        // on completion
        this.loading.emit(false);
      }
    )
  }

}
