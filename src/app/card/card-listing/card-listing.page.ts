import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage implements OnInit {

  private cardDeckGroup: string;
  private cardDeck: string;
  private cards: Card[] = [];
  private loader: HTMLIonLoadingElement;

  // @Input loading: any; // TODO: probably it's better to show loading spinner before navigating, and pass it here for dismissing
  // The other way is to use ionWillAppear launch a spinner there, or ionWillDisappear in the parent page (those are not deprecated)

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    this.loader = await this.presentLoading();

    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards: Card[]) => {
        this.cards = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);
          return card;
        });
        this.loader.dismiss();
      }
    );
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
