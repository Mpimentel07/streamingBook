import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Anime } from 'src/app/anime.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'SBK-anime-ranking-material-table',
  templateUrl: './anime-ranking-material-table.component.html',
  styleUrls: ['./anime-ranking-material-table.component.scss']
})
export class AnimeRankingMaterialTableComponent implements OnInit {
  
  constructor(private auth: AuthService) {}
  displayedColumns: string[] = ['rank', 'title', 'score', 'status'];
  


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


