import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from '../../shared/services/loader.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage implements OnInit {

  public cardDeckGroup: string;
  private cardDeck: string;
  public cards: Card[] = [];
  public copyOfCards: Card[] = [];
  public isLoading = false;

  // @Input loading: any; // TODO: probably it's better to show loading spinner before navigating, and pass it here for dismissing
  // The other way is to use ionWillAppear launch a spinner there, or ionWillDisappear in the parent page (those are not deprecated)

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private loader: LoaderService,
    private toaster: ToastService
  ) { }

   ngOnInit() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    this.getCards();
  }

  private async getCards() {
    await this.loader.presentLoading();
    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards: Card[]) => {
        this.loader.dismissLoading();
        this.cards = cards.map((card: Card) => {
          card.text = this.cardService.replaceCardTextLine(card.text);
          return card;
        });
        this.copyOfCards = Array.from(this.cards);
      }, (error: Error) => {
        this.loader.dismissLoading();
        this.toaster.presentErrorToast('Oops! Cards can\'t be loaded at this time! Try refreshing.');
      }
    );
  }

  public async doRefresh(event: any) {
    await this.getCards();
    event.target.complete();
  }

  public hydrateCards(cards: Card[]) {
    this.cards = cards;
    this.isLoading = false;
  }

  /**
   * handleSearch
   */
  public handleSearch() {
    this.isLoading = true;
  }
}
