import { Component } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';

@Component({
  selector: 'app-root',
  imports: [CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
