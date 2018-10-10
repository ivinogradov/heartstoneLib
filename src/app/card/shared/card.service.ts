import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {CardDeck} from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly cardDecks: string[] = [
    'Druid',
    'Mage',
    'Warrior',
    'Rogue',
    'Warlock',
    'Shaman',
    'Priest',
    'Hunter',
    'Paladin'
];
  private API_KEY = 'i0GGCH789Cmsh2bSnHM6rWvDb55Pp1qO0c7jsnL7cKfuPSFtXr';
  private HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';

  constructor(private http: HttpClient) { }

  public getAllCardDecks(): Observable<CardDeck[]> {
    const headers = new HttpHeaders({'X-Mashape-Key' : this.API_KEY});
    return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, { headers });
  }
}
