import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CardsService]
})

export class CardsComponent {
  individual_cards: Card[];
  expanded: number;

  constructor(private cardsService: CardsService,
              public modal: ModalComponent) {
    let tmp = [];
    this.cardsService.getPosts().subscribe(cards => {
      for (let cardSet in cards){
        tmp.push(...cards[cardSet])
      }
    });
    this.individual_cards = tmp;
  }

  expand(index: number, card: Card) {
    // If already expanded: Collapse
    if (this.expanded === index) {
        this.expanded = -1;
    // Else: expand
    } else {
        this.expanded = index;
        this.modal.setMessage(card, card.rarity);
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
  flavor: string,
  mechanics: object,
  artist: string,
}
