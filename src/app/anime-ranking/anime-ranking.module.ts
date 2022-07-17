import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeRankingRoutingModule } from './anime-ranking-routing.module';
import { AnimeRankingFormComponent } from './anime-ranking-form/anime-ranking-form.component';
import { RouterModule } from '@angular/router';
import { RankingTableComponent } from './ranking-table/ranking-table.component';
import { RankingToolbarComponent } from './ranking-toolbar/ranking-toolbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';





@NgModule({
  declarations: [AnimeRankingFormComponent, RankingTableComponent, RankingToolbarComponent],
  imports: [
    CommonModule,
    AnimeRankingRoutingModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [
    AnimeRankingFormComponent,
    RankingTableComponent,
    RankingToolbarComponent,

  ]
})
export class AnimeRankingModule {}
