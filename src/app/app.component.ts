import { Component } from '@angular/core';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  grid = [32, 32];
  gameOfLife = new GameOfLifeComponent;
  updateGrid() {
    this.gameOfLife.generateGrid(this.grid);
  }
}
