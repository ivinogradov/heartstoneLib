import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  @Input() items: any[] = [];
  @Input() filteredProperty: string;
  @Output() searchCompleted = new EventEmitter();

  constructor() { }

  /**
   * handleSearch
   */
  public handleSearch(event: any) {
    const searchText: string = event.target.value;
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
  }
}
