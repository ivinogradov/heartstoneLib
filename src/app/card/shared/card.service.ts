import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck, Card } from './card.model';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  private API_KEY = 'i0GGCH789Cmsh2bSnHM6rWvDb55Pp1qO0c7jsnL7cKfuPSFtXr';
  private HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'X-Mashape-Key' : this.API_KEY});
   }

  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, { headers: this.headers });
  }

  public getCardsByDeck(cardDeckGroup: string, cardDeck: string): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`, { headers: this.headers });
  }
}
