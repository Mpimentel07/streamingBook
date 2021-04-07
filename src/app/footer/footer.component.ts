import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SBK-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  topAnime = ['Ergo Proxy', 
              'Shigatsu Wa Kimi no Uso', 
              'Code Geass', 
              'Fullmetal Alchemist: Brotherhood',
              'Steins;Gate']

  constructor() { }

  ngOnInit(): void {
  }

}
