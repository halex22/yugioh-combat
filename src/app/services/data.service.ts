import { Injectable, signal, effect } from '@angular/core';
import { type Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  private num = signal<number>(20)
  private offset = signal<number>(0)
  cards = signal<Card[]>([])

  constructor() { 
    effect(() => {
      console.log('getting data')
      this.getCards()
    })
  }

  get url() {
    return `${this.BASE_URL}?num=${this.num()}&offset=${this.offset()}&type=normal monster`
  }

  async getCards(){
    const data = await fetch(this.url).then(res => res.json())
    this.cards.set(data.data)
  }

  nextPage() {
    this.offset.update(prev => prev += this.num())
    console.log('now offset is:', this.offset())
  }

}
