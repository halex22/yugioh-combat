import { Component, input, output } from '@angular/core';
import { type Card } from '../../models/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card = input.required<Card>()
  AddToDeck = output<{card: Card, deckIndex: number}>()
  showBtns = input<boolean>()


  sendAddToDeck(deckIndex:number) {
    this.AddToDeck.emit({card: this.card(), deckIndex})
  }
}
