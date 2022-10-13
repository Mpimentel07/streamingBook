import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/dialogs/sign-in/sign-in.component';
import { MatFormField } from '@angular/material/form-field';
import {MatSidenav} from '@angular/material/sidenav';
import { MainPageComponent } from '../main-page.component';
import { AppComponent } from 'src/app/app.component';


 
@Component({
  selector: 'SBK-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.scss']
})
export class MainPageHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public mainRef: MainPageComponent,
              private AppComponent: AppComponent) { }

  //BUILDING MENU
  menu: any[];

  ngOnInit(): void {
    this.createMenu();
    console.log(this.menu);

    this.AppComponent.close()
    }

  createMenu(){
    this.menu = [
      {label: 'ranking de animes', path:'/ranking'},
      {label: 'animes da temporada', path:''},
      {label: 'discord', path:''},
      {label: 'adicionar anime', path:'/adicionar'},
      {label: 'perfil', path:'/profile'}

    ]
  }
    //LOGIN DIALOG
    openDialogSignIn(): void {
      const dialogRef = this.dialog.open(SignInComponent, {

      })
      dialogRef.afterClosed().subscribe(result=>{

      })
    }

    // open($event){

    //   this.mainRef.open($event)
    // }

    openSideMenu($event){
      this.AppComponent.open($event)
    }





  
  }


    



 






