import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../helper-files/Pokemon';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() pokemonster?: Pokemon;

  constructor() {
    // this.pokemonster = { id: 0, }
  }

  ngOnInit(): void {
    if (this.pokemonster?.type == "Normal") {
      console.log(this.pokemonster?.name);
    }

  }



  // returntag(): string {
  //   return `<div class="type">${this.pikachu ? this.pikachu.type : ''}</div>`;
  // }

}
