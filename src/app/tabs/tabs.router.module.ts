import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule'
          }
        ],
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: '../contact/contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: 'card',
        children: [
          {
            path: '',
            loadChildren: '../card/card.module#CardPageModule'
          }
        ]
      },
      {
        path: 'card/:cardDeckGroup/:cardDeck',
        children: [
          {
            path: ':cardDeckGroup/:cardDeck',
            loadChildren: '../card/card.module#CardPageModule'
          }
        ]
      },
      {
        path: 'card/:cardId',
        children: [
          {
            path: ':cardId',
            loadChildren: '../card/card.module#CardPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
