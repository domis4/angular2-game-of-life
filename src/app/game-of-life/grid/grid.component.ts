import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridSize = [32, 32];
  grid = [[]];
  constructor() { }

  ngOnInit() {
    this.reinitGrid();
  }

  reinitGrid() {
    this.grid = [];
    for (let i = 0; i < this.gridSize[0]; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.gridSize[1]; j++) {
        this.grid[i][j] = 0;
      }
    }
  }

}
