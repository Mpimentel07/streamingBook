import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeRankingFormComponent } from './anime-ranking-form/anime-ranking-form.component'
import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRankingRoutingModule { }
