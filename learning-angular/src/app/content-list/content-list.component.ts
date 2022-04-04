import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../helper-files/Pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  pokemonsters: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    this.pokemonsters = [];
  }

  ngOnInit(): void {
    this.getContentFromServer();
  }

  getContentFromServer(): void{
    this.pokemonService.getContent().subscribe(pokemonarray => {
      console.log("Got the content from the server: ", pokemonarray);
      this.pokemonsters = pokemonarray;
    });
  }

  updatePage(sTerm: string): void {
    console.log("Before changing it ", sTerm);
    sTerm = "I changed it the bad way";
    console.log("After changing it ", sTerm);
    // this.title = "Changed value of title";
    // run something here
  }

  updatePokemonInList(contentItem: Pokemon): void {
    this.pokemonService.updateContent(contentItem).subscribe(() => {
      // this.pokemonsters[contentItem.id ?? 0] = contentItem;

      console.log("Content updated successfully")
      this.getContentFromServer();
    });
  }

  // id will be set by the server if newContentItem doesn't have one
  addPokemonToList(newContentItem: Pokemon): void {
    this.pokemonService.addContent(newContentItem).subscribe(newContentFromServer => {
      console.log("COntent added and came back from the server! ", newContentFromServer);
      // less efficient, but if you're expecting frequent updates, this makes sure you get them
      this.getContentFromServer();

      // more efficient, but potentially misses other server updates to the content
      // this.pokemonsters.push(newContentFromServer);
      // this.pokemonsters = [...this.pokemonsters]; // using the spread operator
    });
  }


  // addPokemonToList(newPokemonOnTheListSide: Pokemon): void {
  //   console.log("The list before I push: ", this.pokemonsters);
  //   this.pokemonsters.push(newPokemonOnTheListSide);
  //   console.log("The list AFTER I push: ", this.pokemonsters);

  //   // We need to clone the array for the pipe to work
  //   // This is an old way of cloning an object
  //   // this.pokemonsters = Object.assign([], this.pokemonsters);

  //   // This is a newer, faster way to clone an array
  //   this.pokemonsters = [...this.pokemonsters]; // using the spread operator

  // }

}
