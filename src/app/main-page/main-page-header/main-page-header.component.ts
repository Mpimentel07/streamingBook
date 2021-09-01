import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
 
@Component({
  selector: 'SBK-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.scss']
})
export class MainPageHeaderComponent implements OnInit {

  headerMenu = ['Anime Ranking', 'Seasonal Anime', 'Discord', 'Help']

  logo: string = "https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.15752-9/239992288_905089826752128_4837853262757305852_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ib51EYkieNMAX87ynuh&tn=A7dT8_kmtv4S4npN&_nc_ht=scontent.fcpq2-1.fna&oh=d33d6c737fede6d5b53508b98e40c203&oe=6146E451"

  // background: string = 'https://lh3.googleusercontent.com/SZrILikJygluJaxnWxsNFUbuHCdWVb4SDnHbmhgTC8yM9lKN38vPEDBUKgIU2aS-e9WX--BZjC6t6VKGvbe8MWxWQrk2LUkVWeWzpxk86gKwZ3IgVujT42JRMzdAmQv1YXWxOJSISZjOlG6NSV_SQKrs2M1vzzLni0tIfABIiyu9rtMN0tCB_cwj0qgOeQNcAU6QlmeLGOFmj2BhhB-FODFdSRo1dV9lJUt2LP3ut7GDH0IprPIcFE46XsDMDXdbEKwZegqdyfiu_5vTqcL8cpR65W3BPwB6wsVzWl8V1TMz-NF99QlzhTto3OYaEOk5jhMjaa-Sx69lwhOG1cNhCkDuDfrNLZvxoVSiyEUDjAZRuoS2OIvTHzK-peuldxtvewzxsHvmmhNQH4s-dytS5EVpS9jTAyrqvDSX1-VATquLYoBp3jzabm-_dfCTFEl88vhuPA4sUPTH7eshNlh8JDjp-1d0L6S5F3_jCpuzBhUUq2XJYFOlkOY3eC1uGJUaw6vYg1qZV8-ENP4Msj4GuKZw7pvUympT4IEOEwj6LFGrhfm6x9CAwgj8qS1vo5kXRNZGwRmcCnKEZCRQUItYiSC8nM5Urcv0_cz9KbrEZppRkYBpWZiz8dC-mfP_o_1If1lQIWcOJHcKgNSdyQTE3LNQM92qDeipzCGVZ7WtoyEJgUOx5txfmEYdV8OM--CQVy71jQ5qRCCvurZFPbWtUCI=w1366-h345-no?authuser=0'
    // background: string = 'https://www.anbient.com/files/styles/destaque_large/public/img/destaque-kono-subarashii-sekai-ni-shukufuku-wo/destaque-35131.jpg?itok=PI4dQaNg&timestamp=1508518623'
  // background: string = 'https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.15752-9/235174218_135592382060268_8672758683802697308_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=o0rsHwzF1aMAX8u6mn1&_nc_ht=scontent.fcpq2-1.fna&oh=58e37889e16d1f227edb53a45d0c9c4f&oe=613CE743'
  // background: string = 'https://www.anbient.com/files/styles/destaque_large/public/img/destaque-mushishi/destaque-17139.jpg?itok=F9YgomkY&timestamp=1451669716'
  background: string ='https://cdn.anbient.com/cdn/farfuture/8RVW8h7kcTS9hnn6w-2wiIuoOV7xqTr1oM-1aIml-x0/mtime:1516276609/files/styles/destaque_large/public/img/destaque-shingeki-no-kyojin/destaque-36466.jpg?itok=Vo4MoRP8&timestamp=1516276582'



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        height: '400px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       });
    }

 

}




