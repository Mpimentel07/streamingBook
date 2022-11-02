import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from "@angular/cdk/layout"

 
@Component({
  selector: 'SBK-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  constructor(
    private observer: BreakpointObserver

  ) { }

  // ngAfterViewInit(){
  //   this.observer.observe(['{max-width: 781px}'])
  //                 .subscribe((res)=>{
  //                   if(res.matches){
  //                     this.sidenav.close()
  //                   }
  //                   // else{
  //                   //   this.sidenav.mode = "side"
  //                   // }
  //                 })
  // }

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


    // @ViewChild('sidenav') sidenav: MatSidenav;


    // open($event){
    //   if($event){
    //     this.sidenav.open()
    //   } 
    // }

    // close() {
    // this.sidenav.close();
    // }
  

}
