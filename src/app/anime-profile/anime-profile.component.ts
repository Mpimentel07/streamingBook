import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../anime.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'SBK-anime-profile',
  templateUrl: './anime-profile.component.html',
  styleUrls: ['./anime-profile.component.scss']
})
export class AnimeProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getProfile()
  }
  
  animes: Anime[]
  
  // getProfile(anime: Anime): Anime{
  //   this.auth.getProfile(anime).subscribe(response=>{
  //     this.anime = response
  //   })
  //   return this.anime
  // }
  getProfile(): Anime[]{
    this.auth.list().subscribe(response=>{
      this.animes = response
    })
    return this.animes
  }


}
