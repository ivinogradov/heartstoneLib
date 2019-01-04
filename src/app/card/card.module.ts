import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardService } from './shared/card.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent  } from './components/card-list.component';
import { CardListingPage } from './card-listing/card-listing.page';
import { CardDetailPage } from './card-detail/card-detail.page';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: CardDeckPage
            },
            {
                path: ':cardId',
                component: CardDetailPage,
            },
            {
                path: ':cardDeckGroup/:cardDeck',
                component: CardListingPage
            }
        ])
    ],
    declarations: [
        CardDeckPage,
        CardListComponent,
        CardListingPage,
        CardDetailPage
    ],
    providers: [
        CardService
    ]
})

export class CardPageModule {}
