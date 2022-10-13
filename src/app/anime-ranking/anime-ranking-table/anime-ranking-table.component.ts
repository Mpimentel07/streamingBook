import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Anime } from 'src/app/anime.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'SBK-anime-ranking-table',
  templateUrl: './anime-ranking-table.component.html',
  styleUrls: ['./anime-ranking-table.component.scss']
})
export class AnimeRankingTableComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.createTable()
  }

  animes: Anime[]
  createTable(): Anime[]{
     this.auth.list().subscribe(response=>{
      this.animes = response
    })
    return this.animes
  }

}
