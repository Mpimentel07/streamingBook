import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { AnimeProfileComponent } from './anime-profile/anime-profile.component';
import { AnimeRankingComponent } from './anime-ranking/anime-ranking.component';

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path: 'adicionar', component: AddAnimeComponent},
  {path: 'profile', component: AnimeProfileComponent},
  {path: 'ranking', component: AnimeRankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
