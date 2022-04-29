import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import {MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from "@angular/cdk/layout"

 
@Component({
  selector: 'SBK-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  constructor(
    private usuarioService: UsuarioService,
    private observer: BreakpointObserver

  ) { }

  afterViewInit(){
    this.observer.observe(['{min-width: 781px}'])
                  .subscribe((res)=>{
                    if(res.matches){
                      this.sidenav.mode="over"
                      this.sidenav.close()
                    }
                    // else{
                    //   this.sidenav.mode = "side"
                    // }
                  })
  }

  ngOnInit(): void {

    
    }

    menu: any[]

    createMenu(){
      this.menu = [
        {label: 'anime ranking', path:'/ranking'},
        {label: 'seasonal anime', path:''},
        {label: 'discord', path:''},
        {label: 'adicionar anime', path:'/adicionar'}
      ]
    }


    @ViewChild('sidenav') sidenav: MatSidenav;

    clicked = false

    open($event){
      if($event){
        this.clicked = true
        this.sidenav.open()
      } 
    }


    close() {
    this.sidenav.close();
    // this.clicked=false
    }
  

}
