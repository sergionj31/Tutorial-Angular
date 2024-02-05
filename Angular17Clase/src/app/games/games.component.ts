import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      <li>
        @for (game of games; track game.id) {
          <li (click)="fav(game.name)">{{ game.name }}</li>
        }
      </li>
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavouriteEvent = new EventEmitter<string>();


  fav(gameName: string){
    this.addFavouriteEvent.emit(gameName);
  }
  
  games = [
    {
      id: 1,
      name: 'Uncharted 4',
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn',
    },
    {
      id: 3,
      name: 'Bloodborne',
    }
  ]
}
