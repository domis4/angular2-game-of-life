import { Injectable } from '@angular/core';

@Injectable()
export class FpsService {

  fps = 60;
  delta: number;
  lastLoopTime: number;
  lastFpsTime: number;
  OPTIMAL_TIME: number;
  realFps: number;
  displayFps: number;
  constructor() { }

  setLimit(fps: number) {
    this.fps = fps;
    this.OPTIMAL_TIME = 1000 / this.fps;
    this.lastLoopTime = performance.now();
    this.lastFpsTime = 0;
    this.realFps = 0;
    this.displayFps = 0;
  }

  limit(callback) {
    const now = performance.now();
    const updateLength = now - this.lastLoopTime;
    this.lastLoopTime = now;
    this.delta = updateLength / this.OPTIMAL_TIME;
    this.lastFpsTime = this.lastFpsTime + updateLength;
    this.realFps = this.realFps + 1;
    if (this.lastFpsTime >= 1000) {
        console.log(this.displayFps);
        this.lastFpsTime = 0;
        this.fps = 0;
        this.displayFps = this.realFps;
        this.realFps = 0;
    }

    setTimeout(
      callback,
      this.lastLoopTime - performance.now() + this.OPTIMAL_TIME
    );
  }

  getDisplayFps() {
    return this.displayFps;
  }
  getDeltaTime() {
    return this.delta;
  }
}
