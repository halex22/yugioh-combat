import { Component, inject, output, WritableSignal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CardListComponent } from '../card-list/card-list.component';
import { Card } from '../../models/card';

type CardSelection = {
  card: Card 
  deckIndex: number
}

@Component({
  selector: 'app-select-list',
  imports: [CardListComponent],
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.scss'
})
export class SelectListComponent {
  cards: WritableSignal<Card[]>
  service = inject(DataService)
  sendCardToHome = output<CardSelection>()

  constructor() {
    this.cards = this.service.cards
  }

  loadMoreCards() {
    this.service.nextPage()
  }

  dispatchSelectionToHome(selection: CardSelection) {
    this.sendCardToHome.emit(selection)
  }
}
