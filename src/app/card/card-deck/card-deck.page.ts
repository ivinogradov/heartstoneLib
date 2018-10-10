import {Component } from '@angular/core';

@Component({
    selector: 'app-card-deck',
    templateUrl: './card-deck.page.html',
    styleUrls: [ './card-deck.page.scss' ]
})

export class CardDeckPage {

    public readonly cardDecks: string[] = [
        'Druid',
        'Mage',
        'Warrior',
        'Rogue',
        'Warlock',
        'Shaman',
        'Priest',
        'Hunter',
        'Paladin'
    ];
}
