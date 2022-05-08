import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeRankingRoutingModule } from './anime-ranking-routing.module';
import { AnimeRankingFormComponent } from './anime-ranking-form/anime-ranking-form.component';
import { RouterModule } from '@angular/router';
import { RankingTableComponent } from './ranking-table/ranking-table.component';
import { RankingToolbarComponent } from './ranking-toolbar/ranking-toolbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AnimeRankingFormComponent, RankingTableComponent, RankingToolbarComponent],
  imports: [
    CommonModule,
    AnimeRankingRoutingModule,
    RouterModule,
    MatTableModule,
    MatButtonModule
    
  ],
  exports: [
    AnimeRankingFormComponent,
    RankingTableComponent,
    RankingToolbarComponent,

  ]
})
export class AnimeRankingModule {}
