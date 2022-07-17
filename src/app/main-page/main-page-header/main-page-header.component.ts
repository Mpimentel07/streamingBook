import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/dialogs/sign-in/sign-in.component';
import { MatFormField } from '@angular/material/form-field';
import {MatSidenav} from '@angular/material/sidenav';
import { MainPageComponent } from '../main-page.component';


 
@Component({
  selector: 'SBK-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.scss']
})
export class MainPageHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public mainRef: MainPageComponent) { }

  //BUILDING MENU
  menu: any[];

  ngOnInit(): void {
    this.createMenu();
    console.log(this.menu);

    }

  createMenu(){
    this.menu = [
      {label: 'anime ranking', path:'/ranking'},
      {label: 'seasonal anime', path:''},
      {label: 'discord', path:''},
      {label: 'adicionar anime', path:'/adicionar'}
    ]
  }
    //LOGIN DIALOG
    openDialogSignIn(): void {
      const dialogRef = this.dialog.open(SignInComponent, {

      })
      dialogRef.afterClosed().subscribe(result=>{

      })
    }

    open($event){

      this.mainRef.open($event)
    }




  
  }


    



 






