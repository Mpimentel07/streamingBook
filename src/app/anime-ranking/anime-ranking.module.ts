import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRankingRoutingModule } from './anime-ranking-routing.module';
import { AnimeRankingFormComponent } from './anime-ranking-form/anime-ranking-form.component';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [AnimeRankingFormComponent],
  imports: [
    CommonModule,
    AnimeRankingRoutingModule,
    RouterModule
    
  ],
  exports: [
    AnimeRankingFormComponent
  ]
})
export class AnimeRankingModule { }
