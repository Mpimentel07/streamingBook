import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageHeaderComponent } from './main-page/main-page-header/main-page-header.component';
import { AnimeCardsComponent } from './main-page/anime-cards/anime-cards.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './dialogs/sign-up/sign-up.component'
import { SignInComponent } from './dialogs/sign-in/sign-in.component'
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import  { AuthService } from './auth.service';
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
import { ExpansionPanelComponent } from './add-anime/expansion-panel/expansion-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { GenreMaterialChipsComponent } from './add-anime/expansion-panel/genre-material-chips/genre-material-chips.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DatePipe } from '@angular/common';
import { AnimeProfileComponent } from './anime-profile/anime-profile.component';
import { AnimeRankingComponent } from './anime-ranking/anime-ranking.component';
import { AnimeRankingTableComponent } from './anime-ranking/anime-ranking-table/anime-ranking-table.component';
import { AnimeRankingMaterialTableComponent } from './anime-ranking/anime-ranking-material-table/anime-ranking-material-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageHeaderComponent,
    AnimeCardsComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    AddAnimeComponent,
    ExpansionPanelComponent,
    GenreMaterialChipsComponent,
    AnimeProfileComponent,
    AnimeRankingComponent,
    AnimeRankingTableComponent,
    AnimeRankingMaterialTableComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    MatExpansionModule,
    MatSidenavModule,
    MatDividerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [ 
              AuthService,
              MatDatepickerModule,
              DatePipe,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
