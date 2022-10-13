import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips'
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'SBK-genre-material-chips',
  templateUrl: './genre-material-chips.component.html',
  styleUrls: ['./genre-material-chips.component.scss']
})
export class GenreMaterialChipsComponent {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  genreCtrl = new FormControl();

  filteredGenres: Observable<any[]>;

  genres = [
    '',
  ];

  allGenres = [
    'Shonen',
    'Shojo',
    'Seinen',
    'Escolar',
    'Mecha'
  ];

  @ViewChild('genreInput') genreInput: ElementRef;

  constructor() {
    this.filteredGenres = this.genreCtrl.valueChanges.pipe(
        startWith(null),
        map((genre: string | null) => genre ? this.filter(genre) : this.allGenres.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.genres.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.genreCtrl.setValue(null);
  }

  remove(genre: any): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allGenres.filter(genre =>
        genre.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.genres.push(event.option.viewValue);
    this.genreInput.nativeElement.value = '';
    this.genreCtrl.setValue(null);
  }

}
