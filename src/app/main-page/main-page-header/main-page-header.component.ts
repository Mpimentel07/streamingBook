import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SBK-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.scss']
})
export class MainPageHeaderComponent implements OnInit {

  headerMenu = ['Anime Ranking', 'Seasonal Anime', 'Discord', 'Help']

  constructor() { }

  ngOnInit(): void {

   
  }

}
