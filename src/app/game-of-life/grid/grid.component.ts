import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
    providers: [GameService]
})
export class GridComponent implements OnInit {
  gameService: GameService;
  gridSize = [12, 12];
  constructor(gameService: GameService) {
    this.gameService = gameService;
   }

  ngOnInit() {
    this.gameService.setGridSize(this.gridSize);
    this.reinitGrid('random');
  }

  switchState(x: number, y: number) {
    this.gameService.switchState(x, y);
  }

  reinitGrid(mode: string) {
   this.gameService.reinitGrid(mode, this.gridSize[0], this.gridSize[1]);
  }

  getGrid() {
    return this.gameService.getGrid();
  }

  getGridSize() {
    return this.gameService.getGridSize();
  }

  nextStep() {
    this.gameService.nextStep();
  }

  autoPlay() {
    this.gameService.autoPlay();
  }

}
