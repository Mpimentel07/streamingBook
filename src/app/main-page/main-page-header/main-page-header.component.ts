import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/dialogs/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/dialogs/sign-up/sign-up.component';
import { MatFormField } from '@angular/material/form-field';

 
@Component({
  selector: 'SBK-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.scss']
})
export class MainPageHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    }

    openDialogSignIn(): void {
      const dialogRef = this.dialog.open(SignInComponent, {

      })
      dialogRef.afterClosed().subscribe(result=>{

      })
    }



 

}




