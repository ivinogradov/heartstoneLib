import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage implements OnInit {

  private cardDeckGroup: string;
  private cardDeck: string;
  private cards: any[] = [];

  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      cards => this.cards = cards
    );
  }

}
