import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Anime } from '../anime.model';
@Component({
  selector: 'SBK-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.createList()
  }

  animes: Anime[]
  createList(): Anime[]{
    this.auth.list().subscribe(response =>{
      this.animes = response
    })
    return this.animes
  }

}
