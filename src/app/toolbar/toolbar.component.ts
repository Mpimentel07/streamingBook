import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInComponent } from '../dialogs/sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { AppComponent } from '../app.component';

@Component({
  selector: 'SBK-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private AppComponent: AppComponent) { }
  menu: any[]
  ngOnInit(): void {
    this.menu = [
      {label: 'ranking de animes', path:'/ranking'},
      {label: 'animes da temporada', path:''},
      {label: 'perfil', path:'/profile'},
      {label: 'discord', path:''},
      {label: 'adicionar anime', path:'/adicionar'}
  
    ]

    this.AppComponent.close()
  }

  @ViewChild('sidenav') sidenav: MatSidenav

  open($event){
    if($event){
      this.AppComponent.open($event)
    }
  }



}
