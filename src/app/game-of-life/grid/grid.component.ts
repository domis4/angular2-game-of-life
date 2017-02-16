import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridSize = [12, 12];
  grid = [[]];
  constructor() { }

  ngOnInit() {
    this.reinitGrid('random');
  }

  switchState(x: number, y: number) {
    if (this.grid[x][y] === 0) {
      this.grid[x][y] = 1;
    } else {
      this.grid[x][y] = 0;
    }
  }

  reinitGrid(mode: string) {
    this.grid = [];
    for (let i = 0; i < this.gridSize[0]; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.gridSize[1]; j++) {
        if (mode === 'random') {
          this.grid[i][j] = Math.round(Math.random());
        }
        if (mode === 'empty') {
          this.grid[i][j] = 0;
        }
      }
    }
  }

}
