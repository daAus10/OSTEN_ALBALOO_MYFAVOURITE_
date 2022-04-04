import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../helper-files/Pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  individualPokemon?: Pokemon;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("this is really bad, how did the id not get set?");
      }
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.pokemonService.getContentItem(this.id).subscribe((singlePokemon) => {
        this.individualPokemon = singlePokemon;
      });
    });
  }

}
