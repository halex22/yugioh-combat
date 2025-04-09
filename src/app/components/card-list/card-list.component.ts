import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type Card } from '../../models/card';

@Component({
  selector: 'ul[card-list]',
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  cards = input.required<Card[]>()
  AddToDeck = output<{card: Card, deckIndex: number}>()
  showBtns = input.required<boolean>()

  sendAddToDeck(card: Card, deckIndex:number) {
    this.AddToDeck.emit({card, deckIndex})
  }

}
