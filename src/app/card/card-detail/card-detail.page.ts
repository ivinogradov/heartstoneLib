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
      (card: Card[]) => {
        this.card = card[0];
      }
    );
  }

}
