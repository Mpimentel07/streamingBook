import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Anime } from '../../anime.model'
import { AuthService } from '../..//auth.service';
import { DatePipe, formatDate } from '@angular/common';
import * as _ from 'lodash';



@Component({
  selector: 'SBK-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  
  //EXPANSION PANEL CONFIGS  
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  //SELECT BOXES ARRAYS
  studios: string [] = ['Manglobe','P.A. Works' ,'Pierrot','MadHouse',
                        'Ufotable','Wit Studio','Bones',
                        'Studio Ghibili','A-1 Pictures','Wit Studio',
                        'Sunrise','Gainax','Kyoto Animation', 'Shaft',
                        'Studio Deen', 'Production I.G.', 'Toei Animation',
                        'AIC']
  platforms: string [] = ['TV', 'Movie']
  seasons: string [] = ['Inverno', 'Primavera', 'Verão', 'Outono']
  days: string [] = ['Domingo', 
                      'Segunda-Feira', 
                      'Terça-Feira', 
                      'Quarta-Feira',
                      'Quinta-Feira', 
                      'Sexta-Feira', 
                      'Sábado']
                      

  //NUMBER OF EPISODES
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl('', Validators.min(1));

  //FORMGROUP EXPANSION PANEL
  animeFormBuilder: FormGroup
  animeForm: Anime

  startDate: any = new Date()
  endDate: Date = new Date()


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private datePipe: DatePipe
              
    ) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });

    this.startDate = this.datePipe.transform(this.startDate, 'dd-MM-yyyy')
}

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }


  ngOnInit(): void {
    this.animeFormBuilder = this.fb.group({
      name: [''],
      studio: [''],
      episodes: [''],
      season: [''],
      platform: [''],
      startDate: [''],
      endDate: [''], 
      broadcast_day: [''],
      hour: [''],
      duration: [''],
      // genres: [''],
      synopsis: [''],
      imagePath: [''],
      score:['']
      // cardPhoto:[''],
      // profilePhoto:[''],
      // coverPhoto:['']
    })

  }

  OnSubmit(){

    const formValues = this.animeFormBuilder.value
    const animeForm: Anime = new Anime(
      formValues.name,
      formValues.studio,
      formValues.episodes,
      formValues.season,
      formValues.platform,
      formValues.startDate = Date.parse(formValues.startDate),
      formValues.endDate = Date.parse(formValues.endDate),
      formValues.broadcast_day,
      formValues.hour,
      formValues.duration,
      // formValues.genres,
      formValues.synopsis,
      formValues.imagePath + '.jpg',
      // formValues.coverPhoto + '.jpg',
      // formValues.cardPhoto = formValues.coverPhoto + '.jpg',
      // formValues.profilePhoto = formValues.coverPhoto + '.jpg',
      formValues.rank,
      formValues.score
    )
    // = this.datePipe.transform(formValues.endDate, 'full')
    // this.authService.add(animeForm).subscribe(response=>{
    //   console.log(animeForm)
    // })
    console.log(animeForm)
    this.authService.add(animeForm).subscribe(response =>{
      console.log(response)
    })
    
  }


  // uploadCardPhoto(event, anime){
  //   const files = event.target.files;
  //   if(files){
  //     const cardPhoto = files[0]
  //     const formData: FormData = new FormData();
  //     formData.append("cardPhoto", cardPhoto)
  //     this.authService.cardPhoto(anime, formData)
  //         .subscribe(response =>{
  //           console.log(anime.cardPhoto)
  //         })
  //   }
  // }

  
  // uploadProfilePhoto(event, anime){
  //   const files = event.target.files;
  //   if(files){
  //     const profilePhoto = files[0]
  //     const formData: FormData = new FormData();
  //     formData.append("profilePhoto", profilePhoto)
  //     this.authService.profilePhoto(anime, formData)
  //         .subscribe(response =>{
  //           console.log(anime.profilePhoto)
  //         })
  //   }
  // }

  // uploadCoverPhoto(event, anime){
  //   const files = event.target.files;
  //   if(files){
  //     const coverPhoto = files[0]
  //     const formData: FormData = new FormData();
  //     formData.append("coverPhoto", coverPhoto)
  //     this.authService.coverPhoto(anime, formData)
  //         .subscribe(response =>{
  //           console.log(anime.coverPhoto)
  //         })
  //   }
  // }

}


