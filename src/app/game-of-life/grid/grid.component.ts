import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FpsService } from '../fps/fps.service';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
    providers: [GameService]
})
export class GridComponent implements OnInit {
  gameService: GameService;
  gridSize = [24, 24];
  isPlaying = false;
  fpsService: FpsService;
  constructor(gameService: GameService, fpsService: FpsService) {
    this.gameService = gameService;
    this.fpsService = fpsService;
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

  autoPlay(isPlaying: boolean) {
    if (isPlaying) {
      this.gameService.autoPlay();
    } else {
      this.gameService.stopPlay();
    }
  }

  getDisplayFps() {
    return this.fpsService.getDisplayFps();
  }

  getDeltaTime() {
    return this.fpsService.getDeltaTime();
  }

}
