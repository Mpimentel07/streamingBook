import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageHeaderComponent } from './main-page/main-page-header/main-page-header.component';
import { AnimeCardsComponent } from './main-page/anime-cards/anime-cards.component';
import { FooterComponent } from './footer/footer.component';
import  { UsuarioService } from './usuario.service'
import { SignUpComponent } from './dialogs/sign-up/sign-up.component'
import { SignInComponent } from './dialogs/sign-in/sign-in.component'



import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import  { AuthService } from './auth.service';
import { AnimeRankingModule } from './anime-ranking/anime-ranking.module'
import { RouterModule } from '@angular/router'

import { TokenInterceptor } from './token.interceptor';
import { AddAnimeComponent } from './add-anime/add-anime.component';

import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageHeaderComponent,
    AnimeCardsComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    AddAnimeComponent
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AnimeRankingModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatListModule,
    MatExpansionModule
    
    
    

    
  ],
  providers: [UsuarioService, 
              AuthService,
              MatDatepickerModule,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
