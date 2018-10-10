import {Component, OnInit } from '@angular/core';
import { CardService } from '../shared/card.service';
import { CardDeck } from '../shared/card.model';

@Component({
    selector: 'app-card-deck',
    templateUrl: './card-deck.page.html',
    styleUrls: [ './card-deck.page.scss' ]
})

export class CardDeckPage implements OnInit {

    public cardDecks: CardDeck[] = [];
    constructor(private cardService: CardService) {}

    private getCardDecks() {
        this.cardService.getAllCardDecks().subscribe(
            (cardDecks) => this.cardDecks = cardDecks.classes
        );
    }

    ngOnInit(): void {
        this.getCardDecks();
    }
}
