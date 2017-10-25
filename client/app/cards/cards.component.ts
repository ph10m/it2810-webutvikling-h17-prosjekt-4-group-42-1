import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-cards',
  template: `
  <div class="card-display">
  <div *ngFor="let card of individual_cards; let i = index" (click)="expand(i)">
    <h3>{{card.name}}</h3>
    <div *ngIf="expanded === i">
      <p> In set: {{card.cardSet}} </p>
      <p> Type: {{card.type}} </p>
      <div *ngIf="card.type === 'Minion'">
        <p> Attack: {{card.attack}}, Health: {{card.health}}</p>
        <p *ngIf="card.race"> Race: {{card.race}} </p>
      </div>
      <p> Text: {{card.text}} </p>
      <p> Flavor: {{card.flavor}} </p>
      <p> Artist: {{card.artist}} </p>
      <p> Rarity: {{card.rarity}} </p>
      <img src="{{card.img}}" />
    </div>
    <br/>
  </div>
  </div>`,
  providers: [CardsService]
})

export class CardsComponent {
  individual_cards: Card[];
  expanded: number;

  constructor(private cardsService: CardsService) {
    let tmp = [];
    this.cardsService.getPosts().subscribe(cards => {
      for (let cardSet in cards){
        tmp.push(...cards[cardSet])
      }
    });
    this.individual_cards = tmp;
    console.log(this.individual_cards);
  }

  expand(index: number) {
    // If already expanded: Collapse
    if (this.expanded === index) {
        this.expanded = -1;
    // Else: expand
    } else {
        this.expanded = index;
    }
  }
}

interface Card {
  attack: number,
  cardSet: string,
  cost: number,
  faction: string,
  health: number,
  img: string,
  imgGold: string,
  name: string,
  playerClass: string,
  race: string,
  rarity: string,
  type: string,
  text: string,
  flavor: string,
  mechanics: object,
  artist: string,
}
