import { Component } from '@angular/core';
import {CardService} from "./card/card.service";
import {Observable} from "rxjs/Observable";
import {Card} from "./models/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cards$: Observable<Card[]>;

  addCard(cardText: string) {
    this.cardService.createCard(new Card(cardText));
  }

  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.getCardsList();
  }
}
