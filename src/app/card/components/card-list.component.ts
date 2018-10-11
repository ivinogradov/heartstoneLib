import { Component, Input } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html'
})

export class CardListComponent {
    @Input() items: any[] = [];
    @Input() listName: string;
    @Input() navigateTo: any;
}
