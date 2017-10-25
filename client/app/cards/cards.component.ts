import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
    selector: 'app-cards',
    template: `
    <div *ngFor="let card of cards; let i = index" (click)="expand(i)">
        <h3>{{card.name}}</h3>
        <div *ngIf="expanded === i">
            <p>{{card.text}}</p>
            <p>Cardclass: {{card.cardClass}}</p>
            <p>Artist: {{card.artist}}</p>
            <p>Collectable: {{card.collectable}}</p>
            <p>Cost: {{card.cost}}</p>
            <p>Flavor: {{card.flavor}}</p>
            <p>Playerclass: {{card.playerClass}}</p>
            <p>Rarity: {{card.rarity}}</p>
            <p>Type: {{card.type}}</p>
            
        </div>
        <br/>
    </div>`,
    providers: [CardsService]
})

export class CardsComponent {

    cards: Card[];
    expanded: number;

    constructor(private cardsService: CardsService) {
        this.cardsService.getPosts().subscribe(cards => {
            this.cards = cards;
        });
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
    name: string;
    text: string;
    cardClass: string;
    artist: string;
    collectible: string;
    cost: string;
    flavor: string;
    playerClass: string;
    rarity: string;
    type: string;
}
