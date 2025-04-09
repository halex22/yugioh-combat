import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-select-list',
  imports: [CardListComponent],
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.scss'
})
export class SelectListComponent {
  cards = inject(DataService).cards
}
