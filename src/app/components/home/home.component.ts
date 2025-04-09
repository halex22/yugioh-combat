import { Component } from '@angular/core';
import { SelectListComponent } from '../select-list/select-list.component';

@Component({
  selector: 'app-home',
  imports: [SelectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
