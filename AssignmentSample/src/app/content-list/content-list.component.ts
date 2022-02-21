import { Component, OnInit } from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  digimonList: Content[];
  titleFound?: boolean;

  constructor() {
    this.digimonList = [{
      id: 0,
      title: 'Agumon',
      description: "He's orange",
      creator: 'Tai',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Agumonappearance.png',
      type: "Rookie",
      tags: ["orange", "gen1", "teamaugumon"]
    }, {
      id: 1,
      title: 'Gabumon',
      description: "He's like a unicorn dog",
      creator: 'Matt',
      imgURL: 'https://static.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg'
    }, {
      id: 2,
      title: 'Biyomon',
      description: "She's pink and she flies",
      creator: 'Sora',
      imgURL: 'https://upload.wikimedia.org/wikipedia/it/thumb/d/d5/Biyomon.png/390px-Biyomon.png',
      type: 'Rookie'
    }, {
      id: 3,
      title: 'Tentomon',
      description: "He looks like a beetle",
      creator: 'Izzy',
      // imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Agumonappearance.png',
      // type: "Rookie"
    }, {
      id: 4,
      title: 'Gomamon',
      description: "He's a really happy seal",
      creator: 'Joe',
      // imgURL: 'https://static.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg'
    }, {
      id: 5,
      title: 'Palmon',
      description: "A walking plant",
      creator: 'Mimi',
      // imgURL: 'https://upload.wikimedia.org/wikipedia/it/thumb/d/d5/Biyomon.png/390px-Biyomon.png',
      type: 'Rookie'
    }, {
      id: 6,
      title: 'Angemon',
      description: "He's got wings",
      creator: 'T.K.',
      // imgURL: 'https://upload.wikimedia.org/wikipedia/it/thumb/d/d5/Biyomon.png/390px-Biyomon.png',
      type: 'Champion'
    }, {
      id: 7,
      title: 'Greymon',
      description: "Digivolved version of Agumon",
      creator: 'Tai',
      // imgURL: 'https://upload.wikimedia.org/wikipedia/it/thumb/d/d5/Biyomon.png/390px-Biyomon.png',
      type: 'Champion'
    }];
  }

  ngOnInit(): void {
  }
  checkForTitle(title: string): void {
    if (this.digimonList.some(d => d.title === title)) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
    if (this.digimonList.filter(d => d.title === title).length) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
  }
}
