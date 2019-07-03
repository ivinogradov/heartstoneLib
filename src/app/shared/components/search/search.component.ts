import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {

  @Input() items: any[] = [];
  @Input() filteredProperty: string;
  @Output() searchCompleted = new EventEmitter();
  @Output() searchStarted = new EventEmitter();

  private searchSubject = new BehaviorSubject<string>('');

  constructor() { }

  /**
   * handleSearch
   */
  public handleSearch(event: any) {
    this.searchStarted.emit();
    this.searchSubject.next(event.target.value);
  }

  ngAfterViewInit(): void {
    this.searchSubject.pipe(debounceTime(500), distinctUntilChanged()).subscribe((searchText: string) => {
      let filteredItems: any[];
      if (!searchText) {
        filteredItems = this.items;
      } else if (!this.items) {
        filteredItems = [];
      } else {
        filteredItems = this.items.filter((item: any) => {
          return item[this.filteredProperty].toLowerCase().includes(searchText.toLowerCase());
        });
      }
      this.searchCompleted.emit(filteredItems);
    });
  }
}
