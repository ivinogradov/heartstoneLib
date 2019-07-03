import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  public card: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private loader: LoaderService
  ) { }

  async ngOnInit() {
    await this.loader.presentLoading();

    const cardId = this.route.snapshot.paramMap.get('cardId');
    this.cardService.getCard(cardId).subscribe(
      (cards: Card[]) => {
        this.loader.dismissLoading();
        this.card = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);

          return card;
        })[0];    // There is only a single card returned
      }
    );
  }

  private updateImage(event: any) {
    this.card.img = './assets/images/DefaultCard.png';
  }

}
