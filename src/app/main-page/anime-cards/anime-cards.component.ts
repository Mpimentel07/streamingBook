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

  
  // cards: any[];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.createCards();
  }

  animes: Anime[]
  createCards(): Anime[]{
    this.auth.list().subscribe(response=>{
      this.animes = response
    })
    return this.animes
  }
}
