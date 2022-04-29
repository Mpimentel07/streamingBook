import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'SBK-anime-cards',
  templateUrl: './anime-cards.component.html',
  styleUrls: ['./anime-cards.component.scss']
})
export class AnimeCardsComponent implements OnInit {

  
  cards: any[];

  constructor() { }

  ngOnInit(): void {
    this.createCards();
  }

  createCards(){
    this.cards = [
      {name: 'demon slayer', path: 'assets/cards/KIMETSU NO YAIBA.jpg'},
      {name: 'ANGEL BEATS!', path: 'assets/cards/ANGEL BEATS!.jpg'},
      {name: 'BORUTO: NARUTO NEXT GENERATION', path: 'assets/cards/BORUTO NARUTO NEXT GENERATIONS.jpg'},
      {name: 'AO NO EXORCIST', path: 'assets/cards/AO NO EXORCIST.jpg'},
      {name: 'FATE: ZERO', path: 'assets/cards/FATE ZERO.jpg'},
      {name: 'FATE: STAY NIGHT (UNLIMITED BLADE WORKS)', path: 'assets/cards/FATE STAY NIGHT UNLIMITED BLADE WORKS.jpg'},
      {name: 'MADOKA MAGICA', path: 'assets/cards/MADOKA MAGICA.jpg'},
      {name: 'NAPPING PRINCESS', path: 'assets/cards/NAPPING PRINCESS.jpg'},
      {name: 'ELDENS ZERO', path: 'assets/cards/ELDENS ZERO.jpg'},
      {name: 'CUE!', path: 'assets/cards/cue!.jpg'},
      {name: 'SHINGEKI NO KYOJIN KUINAKI SENTAKU', path: 'assets/cards/SHINGEKI NO KYOJIN KUINAKI SENTAKU.jpg'},
      {name: 'ANOTHER', path: 'assets/cards/ANOTHER.jpg'},
      {name: 'ONE PIECE', path: 'assets/cards/ONE PIECE.jpg'},
      {name: 'ANGE VIERGE', path: 'assets/cards/ANGE VIERGE.jpg'},
      {name: 'FANTASY BISHOUJO JUNIKU OJISAN TO', path: 'assets/cards/FANTASY BISHOUJO JUNIKU OJISAN TO.jpg'},
      {name: 'TOKYO 24-KU', path: 'assets/cards/TOKYO 24 KU.jpg'},

   
    ]
  }

}
