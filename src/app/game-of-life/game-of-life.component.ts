import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})
export class GameOfLifeComponent implements OnInit {
  grid = [];

  constructor() { }

  ngOnInit() {
    this.generateGrid([32, 32]);
  }

  generateGrid(grid) {
    this.grid = new Array();
    for (let i = 0; i < grid[0]; i++) {
      this.grid[i] = new Array();
      for (let j = 0; j < grid[1]; j++) {
        this.grid[i].push(0);
      }
    }
  }
}
