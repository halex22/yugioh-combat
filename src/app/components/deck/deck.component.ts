import { Component, computed, input } from '@angular/core';
import { Card } from '../../models/card';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-deck',
  imports: [CardListComponent],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss'
})
export class DeckComponent {
  cards = input<Card[]>([])
  playerTitle = input.required<'hero' | 'foe'>()
  totalAttack = computed(() => this.cards()
  .reduce((totalAttack: number, card: Card) => totalAttack + (card.atk || 0) , 0 ))
}
