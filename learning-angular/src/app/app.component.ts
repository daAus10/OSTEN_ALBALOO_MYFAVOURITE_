import { Component } from '@angular/core';
import { Pokemon } from '../helper-files/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Learning';
  pokemonsters: Pokemon[];
  birthday: Date;

  constructor() {
    this.birthday = new Date();
    // let name: string; // explicitly set the type to string
    // name = 'Peter';
    // name = 10;

    // let name = 'Peter'; // implicitly set the type to string
    // name = 9;

    // let typescriptIsTypesafe: boolean = true;
    // let javascriptIsTypesafe = false;

    // let name: any;

    // name = 'Peter';
    // name = 50;

    // let person = {
    //   name: 'Peter',
    //   lastName: 'Nikita',
    //   favouriteNumber: 10
    // };
    this.pokemonsters = [{
      id: 0,
      type: "Electric",
      name: "Pikachu",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png",
      description: "Easily the most popular pokemon around",
      trainerName: "Ash",
      tags: ["Starter", "maincharacter"]
    }, {
      id: 1,
      type: 'Normal',
      name: 'Eevee',
      imageUrl: "",
      description: "The normalest of types, an evolves into every type",
      tags: ["Gary's first pokemon"]
    }, {
      id: 2,
      // type: 'dragon',
      name: 'Dragonite',
      imageUrl: '',
      description: "The third form of this pokemon",
      trainerName: 'Lance',
      tags: ["maildelivery"]
    }];


  }

  updatePage(sTerm: string): void {
    console.log("Before changing it ", sTerm);
    sTerm = "I changed it the bad way";
    console.log("After changing it ", sTerm);
    // this.title = "Changed value of title";
    // run something here
  }

}

