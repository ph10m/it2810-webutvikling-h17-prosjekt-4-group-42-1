import {Component, OnInit} from '@angular/core';
import { CardsService } from '../services/cards.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: [
    './styles/cardlist.scss',
    './styles/filter/rarity.scss',
    './styles/filter/shared.scss'
  ]
})

export class CardsComponent implements OnInit {
  expanded: number;
  limit = 5;
  cards = [];
  isLoading = true;
  viewCards = false;
  viewCardButton = "Toggle image view";

  togglePicture = {
    'Druid': false,
    'Hunter': false,
    'Mage': false,
    'Paladin': false,
    'Priest': false,
    'Rogue': false,
    'Shaman': false,
    'Warlock': false,
    'Qarrior': false,
    'Minion': false,
    'Spell': false,
    'Weapon': false,
    'Hero': false,
    'Common': false,
    'Epic': false,
    'Rare': false,
    'Legendary': false
  };
  lastIndex: boolean;
  active_query = {
      'attack': undefined,
      'health': undefined,
      'cost': undefined,
      'type': [],
      'playerClass': [],
      'rarity': [],
      'limit': this.limit,
      'index': 0
  }

  constructor(private cardsService: CardsService,
              public modal: ModalComponent) { }

  ngOnInit() {
    this.active_query.cost = 9;
    // this.active_query.type=["Spell"];
    this.getCards();
  }

  getCards() {
    console.log(this.active_query);
    this.cardsService.getCards(this.active_query).subscribe(
      data => this.cards = data,
      error => console.log(error),
      () => {
        this.isLoading = false;
        this.getCount();
      }
    );
  }

  getCount() {
    let visible;
    this.cardsService.countCards().subscribe(
      data => visible = data.json(),
      error => console.log(error),
      () => this.lastIndex = visible < this.limit
    );
  }

  setLimit(lim: number) {
    this.limit = lim;
    this.getCards();
  }

  setAttack(atk: number) {
    console.log(atk);
    this.active_query.attack = atk;
    this.getCards();
  }

  setHealth(hp: number) {
    this.active_query.health = hp;
    this.getCards();
  }

  setMana(mana: number) {
    this.active_query.cost = mana;
    this.getCards();
  }

  toggleArray(arr: any, item: any) {
    let tmp = arr;
    if (tmp.includes(item)) {
      tmp = tmp.filter(card => card !== item);
    } else {
      tmp.push(item);
    }
    return tmp;
  }

  toggleClass(heroClass: string) {
    this.togglePicture[heroClass] = !this.togglePicture[heroClass];
    const arr = this.toggleArray(this.active_query.playerClass, heroClass);
    this.active_query.playerClass = arr;
    this.getCards();
  }

  toggleType(cardType: string) {
    this.togglePicture[cardType] = !this.togglePicture[cardType];
    const arr = this.toggleArray(this.active_query.type, cardType);
    this.active_query.type = arr;
    this.getCards();
  }

  toggleRarity(rarity: string) {
    this.togglePicture[rarity] = !this.togglePicture[rarity];
    const arr = this.toggleArray(this.active_query.rarity, rarity);
    this.active_query.rarity = arr;
    this.getCards();
  }

  getStyle(heroclass: string) {
    if (this.togglePicture[heroclass]) {
      return 1;
    } else {
      return 0.3;
    }
  }


  resetQuery() {
    this.active_query = {
      'attack': undefined,
      'health': undefined,
      'cost': undefined,
      'type': [],
      'playerClass': [],
      'rarity': [],
      'limit': this.limit,
      'index': 0
    };
    for (const key in this.togglePicture) {
      this.togglePicture[key] = false;
    }
    this.getCards();
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

  previousPage() {
    this.active_query.index -= 1;
    this.getCards();
  }

  nextPage() {
    this.active_query.index += 1;
    this.getCards();
  }

  toggleView() {
    this.viewCards = !this.viewCards;
    if (this.viewCards) {
      this.viewCardButton = "Toggle text view";
    }
    else {
      this.viewCardButton = "Toggle image view";
    }
  }
}

interface Card {
  attack: number;
  cardSet: string;
  cost: number;
  faction: string;
  health: number;
  img: string;
  imgGold: string;
  name: string;
  playerClass: string;
  race: string;
  rarity: string;
  type: string;
  flavor: string;
  mechanics: object;
  artist: string;
  collectible: boolean;
}
