import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'SBK-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(): void {
    this.createMenu();
}

  menu: any[]

  createMenu(){
    this.menu = [
      {label: 'Ranking dos Animes', path:'/ranking'},
      {label: 'Animes da Temporada', path:''},
      {label: 'Perfil', path:'/profile'},
      {label: 'Discord', path:''},
      {label: 'adicionar anime', path:'/adicionar'}
    ]
  }


  @ViewChild('sidenav') sidenav: MatSidenav;


  open($event){
    if($event){
      this.sidenav.open()
    } 
  }

  close(){
    this.sidenav.close()
  }


}


