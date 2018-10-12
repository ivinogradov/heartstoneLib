import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  private card: Card;


  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) { }

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('cardId');
    this.cardService.getCard(cardId).subscribe(
      (cards: Card[]) => {
        this.card = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);

          return card;
        })[0];    // There is only a single card returned
      }
    );
  }

  updateImage(event) {
    this.card.img = './assets/images/DefaultCard.png';
  }

}
