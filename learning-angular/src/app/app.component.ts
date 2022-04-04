import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../helper-files/Pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Learning';
  birthday: Date;

  constructor() {
    this.birthday = new Date();
  }

}

