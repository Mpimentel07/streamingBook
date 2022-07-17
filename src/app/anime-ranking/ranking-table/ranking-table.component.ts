import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Anime } from 'src/app/anime.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'SBK-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss']
})

export class RankingTableComponent implements OnInit, AfterViewInit {

  constructor(private auth: AuthService){}

  displayedColumns: string[] = ['rank', 'title', 'score', 'status'];
  dataSource = new MatTableDataSource<Anime>(this.toListAnimes());

  ngOnInit(): void {
    this.toListAnimes()
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  animes: Anime[]
  toListAnimes(): Anime[]{
   this.auth.list().subscribe(response =>{
      this.animes = response
    })
    return this.animes
  }

}
  
// export interface tableAnimes {
//   name: string;
//   startDate: number
//   endDate: number
//   episodes: number
//   score: number
//   profilePhoto: any
// }

// 

// const ELEMENT_DATA: tableElements[] = [
//   { title: 'fullmetal alchemist: brotherhood', aired:'Abr 2009 - Jul 2010', episodes:'64', score: '9.14', status: '', 
//     path:'assets/profile/fullmetal-brotherhood.jpg'},
//   { title: 'spy x family', aired:'Abr 2022 -', episodes:'12', score: '9.09', status: '',
//     path:'assets/profile/spyxfamily.jpg'},
//   { title: 'shingeki no kyojin: season 3 part 2', aired:'Abr 2019 - Jul 2019', episodes:'10', score: '9.08', status: '',
//     path:'assets/profile/shingeki-season3.jpg'},
//   { title: 'steins;gate', aired:'Abr 2011 - Set 2011', episodes:'24', score: '9.08', status: '',
//     path:'assets/profile/steins-gate.jpg'},
//   { title: 'gintama', aired:'Abr 2015 - Mar 2016', episodes:'51', score:' 9.08', status: '',
//     path:'assets/profile/gintama.jpg'},
//   {title: 'hunter x hunter (2009)', aired:'Out 2011 - Set 2014', episodes:'148', score: '9.05', status: '',
//     path:'assets/profile/hunterxhunter.jpg'},
//   { title: 'fruits basket: the final', aired:'Abr 2021 - Jun 2021', episodes:'13', score: '9.04', status: '',
//     path:'assets/profile/fruits-basket.jpg'},
//   {title: 'kaguya-sama wa kokurasetai', aired:'Abr 2022', episodes:'12', score:' 8.98', status: '',
//     path:'assets/profile/kaguya-sama.jpg'},
//   {title: '3-gatsu no lion 2nd season', aired:'Out 2017 - Mar 2018', episodes:'22', score: '8.96', status: '',
//     path:'assets/profile/3-gatsu.jpg'},
//   {title: 'koe no katachi', aired:'Set 2016', episodes:'1', score: '8.96', status: '',
//     path:'assets/profile/koe-no-katachi.jpg'},
//   {title: 'violet evergarden movie', aired:'Set 2020 ', episodes:'1', score: '8.95', status: '',
//     path:'assets/profile/violet-evergarden.jpg'},
//   {title: 'clannad after story', aired:'Out 2008 - Mar 2009', episodes:'24',  score: '8.94', status: '',
//     path:'assets/profile/clannad.jpg'},
//   { title: 'code geass: hangyaku no leloudh 2nd season', aired:'Abr 2008 - Set 2008', episodes:'25',score: '8.91', status: '',
//     path:'assets/profile/code-geass-2nd.jpg'},
//   {title: 'owarimonogatari 2nd season', aired:'Ago 2017 - Ago 2017', episodes:'7', score:'8.90', status: '',
//     path:'assets/profile/owarimonogatari-2nd.jpg'},
//   {title: 'shingeki no kyojin: final season part 2', aired:'Jan 2022 - Abr 2022', episodes:'12',score: '8.88', status: '',
//     path:'assets/profile/shingeki-part2.jpg'}
//   ];