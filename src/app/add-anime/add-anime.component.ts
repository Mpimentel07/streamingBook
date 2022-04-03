import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
//DATEPICKER
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@Component({
  selector: 'SBK-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.scss']
})
export class AddAnimeComponent implements OnInit {
  ngOnInit(): void {
  }

  Genres: string[] = ['Shönen', 'Shöjo', 'Seinen', 'Mecha', 'Fantasy', 'School', 'Hentai', 'Ecchi'];
  panelOpenState = false;




}
