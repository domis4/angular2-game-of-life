import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameOfLifeModule } from './game-of-life/game-of-life.module';
import { FpsService } from './game-of-life/fps/fps.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GameOfLifeModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FpsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
