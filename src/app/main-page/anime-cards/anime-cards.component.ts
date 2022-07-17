import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Anime } from 'src/app/anime.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'SBK-anime-cards',
  templateUrl: './anime-cards.component.html',
  styleUrls: ['./anime-cards.component.scss']
})
export class AnimeCardsComponent implements OnInit {

  
  cards: any[];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.createCards();
  }

  animes: Anime[]
  createCards(): Anime[]{
    // this.cards = [
    //   {name: 'DEMON SLAYER', path: 'assets/cards/KIMETSU NO YAIBA.jpg'},
    //   {name: 'ANGEL BEATS!', path: 'assets/cards/ANGEL BEATS!.jpg'},
    //   {name: 'BORUTO: NARUTO NEXT GENERATION', path: 'assets/cards/BORUTO NARUTO NEXT GENERATIONS.jpg'},
    //   {name: 'TENCHI MUYO!', path: 'assets/cards/TENCHI MUYO!.jpg'},
    //   {name: 'FATE: ZERO', path: 'assets/cards/FATE ZERO.jpg'},
    //   {name: 'FATE: STAY NIGHT (UNLIMITED BLADE WORKS)', path: 'assets/cards/FATE STAY NIGHT UNLIMITED BLADE WORKS.jpg'},
    //   {name: 'MADOKA MAGICA', path: 'assets/cards/MADOKA MAGICA.jpg'},
    //   {name: 'ERGO PROXY', path: 'assets/cards/ERGO PROXY.jpg'},
    //   {name: 'KONO SUBARASHII SEKAI NI SHUKUFUKU WO! ', path: 'assets/cards/KONO SUBARASHII SEKAI NI SHUKUFUKU WO!.jpg'},
    //   {name: 'HAIKYUU!!!', path: 'assets/cards/HAIKYUU!!!.jpg'},
    //   {name: 'SHINGEKI NO KYOJIN KUINAKI SENTAKU', path: 'assets/cards/SHINGEKI NO KYOJIN KUINAKI SENTAKU.jpg'},
    //   {name: 'ANOTHER', path: 'assets/cards/ANOTHER.jpg'},
    //   {name: 'ONE PIECE', path: 'assets/cards/ONE PIECE.jpg'},
    //   {name: 'NARUTO SHIPPUUDEN', path: 'assets/cards/NARUTO SHIPPUDEN.jpg'},
    //   {name: 'FAIRY TAIL', path: 'assets/cards/FAIRY TAIL.jpg'},
    //   {name: 'DRAGON BALL SUPER', path: 'assets/cards/DRAGON BALL SUPER.jpg'},
    // ]
    this.auth.list().subscribe(response=>{
      this.animes = response
    })
    return this.animes
  }

}
