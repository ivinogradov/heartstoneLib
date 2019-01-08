import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  private card: Card;
  private loader: HTMLIonLoadingElement;


  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    this.loader = await this.presentLoading();

    const cardId = this.route.snapshot.paramMap.get('cardId');
    this.cardService.getCard(cardId).subscribe(
      (cards: Card[]) => {
        this.card = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);

          return card;
        })[0];    // There is only a single card returned
        this.loader.dismiss();
      }
    );
  }

  private updateImage(event: any) {
    this.card.img = './assets/images/DefaultCard.png';
  }

  private async presentLoading(): Promise<HTMLIonLoadingElement> {
    const loader = await this.loadingCtrl.create({
      message: 'Loading',
      translucent: true
    });
    await loader.present();
    return loader;
  }

}
