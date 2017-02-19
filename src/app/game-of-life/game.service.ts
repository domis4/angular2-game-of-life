import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  grid = [[]];
  gridSize = [];
  constructor() { }

  getGrid() {
    return this.grid;
  }

  getGridSize() {
    return this.getGridSize;
  }

  setGridSize(gridSize) {
    this.gridSize = gridSize;
  }

  switchState(x: number, y: number) {
    if (this.grid[x][y] === 0) {
      this.grid[x][y] = 1;
    } else {
      this.grid[x][y] = 0;
    }
  }

  reinitGrid(mode: string, gridSizeX: number, gridSizeY: number) {
    this.grid = [];
    this.gridSize = [gridSizeX, gridSizeY];
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

  getCellNeighboursCount(i: number, j: number) {
    let neighbours = 0;
    neighbours = neighbours + this.getCellState(i - 1, j - 1, this.grid);
    neighbours = neighbours + this.getCellState(i, j - 1, this.grid);
    neighbours = neighbours + this.getCellState(i + 1, j - 1, this.grid);
    neighbours = neighbours + this.getCellState(i + 1, j, this.grid);
    neighbours = neighbours + this.getCellState(i + 1, j + 1, this.grid);
    neighbours = neighbours + this.getCellState(i, j + 1, this.grid);
    neighbours = neighbours + this.getCellState(i - 1, j + 1, this.grid);
    neighbours = neighbours + this.getCellState(i - 1, j, this.grid);
    return neighbours;
  }

  getCellState(i, j, grid) {
      let cellstate = 0;
      if (i < 0) {
          cellstate = 0;
      } else if (j < 0) {
          cellstate = 0;
      } else if (i > this.gridSize[0] - 1) {
          cellstate = 0;
      } else if (j > this.gridSize[1] - 1) {
          cellstate = 0;
      } else {
          cellstate = this.grid[i][j];
      }
      return cellstate;
  }

  updateCell(i, j, grid) {
      if (this.getCellState(i, j, grid) === 0 && this.getCellNeighboursCount(i, j) === 3) {
          this.changeState(i, j, grid);
      } else if (this.getCellState(i, j, grid) === 1 && this.getCellNeighboursCount(i, j) > 1 && this.getCellNeighboursCount(i, j) < 4) {
          //nothing
      } else if (this.getCellState(i, j, grid) === 1 && this.getCellNeighboursCount(i, j) < 2) {
          this.changeState(i, j, grid);
      } else if (this.getCellState(i, j, grid) === 1 && this.getCellNeighboursCount(i, j) > 3) {
          this.changeState(i, j, grid);
      }
  }

  changeState(i, j, grid) {
      if (grid[i][j] === 0) {
          grid[i][j] = 1;
      } else {
          grid[i][j] = 0;
      }
  }

  nextStep() {
    const tempGrid = JSON.parse(JSON.stringify(this.grid));
    this.grid.forEach((row, i) => {
        row.forEach((cell, j) => {
          this.updateCell(i, j, tempGrid);
        });
    });
    this.grid = tempGrid;
  }
}
