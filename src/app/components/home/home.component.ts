import { Component, signal } from '@angular/core';
import { SelectListComponent } from '../select-list/select-list.component';
import { DeckComponent } from '../deck/deck.component';
import { type Card } from '../../models/card';

type CardSelection = {
  card: Card 
  deckIndex: number
}

@Component({
  selector: 'app-home',
  imports: [SelectListComponent, DeckComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  heroDeck = signal<Card[]>([])
  foeDeck = signal<Card[]>([])


  processUserSelection(selection: CardSelection) {
    const targetDeck = !selection.deckIndex ? this.heroDeck : this.foeDeck;
    targetDeck.update(prev => [...prev, selection.card])
  }
}
