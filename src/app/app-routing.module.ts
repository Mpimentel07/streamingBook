import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AnimeRankingFormComponent } from './anime-ranking/anime-ranking-form/anime-ranking-form.component'
import { AddAnimeComponent } from './add-anime/add-anime.component';

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path: 'ranking', component: AnimeRankingFormComponent},
  {path: 'adicionar', component: AddAnimeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
