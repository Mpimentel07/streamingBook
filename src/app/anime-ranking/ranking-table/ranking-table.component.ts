import {Component} from '@angular/core';

export interface tableElements {
  rank: number
  title: string;
  aired: string
  score: number;
  status: string;
  path: string
}

const ELEMENT_DATA: tableElements[] = [
  {rank: 1, title: 'fullmetal alchemist: brotherhood', aired:'', score: 9.14, status: '', path:'assets/profile/fullmetal-brotherhood.jpg'},
  {rank: 2, title: 'spy x family', aired:'', score: 9.09, status: '',path:'assets/profile/spyxfamily.jpg'},
  {rank: 3, title: 'shingeki no kyojin: season 3 part 2', aired:'', score: 9.08, status: '',path:'assets/profile/shingeki-season3.jpg'},
  {rank: 4, title: 'steins;gate', aired:'', score: 9.08, status: '',path:'assets/profile/steins-gate.jpg'},
  {rank: 5, title: 'gintama', aired:'', score: 9.08, status: '',path:'assets/profile/gintama.jpg'},
  {rank: 6, title: 'hunter x hunter (2009)', aired:'', score: 9.05, status: '',path:'assets/profile/hunterxhunter.jpg'},
  {rank: 7, title: 'fruits basket: the final', aired:'', score: 9.04, status: '',path:'assets/profile/fruits-basket.jpg'},
  {rank: 8, title: 'kaguya-sama wa kokurasetai', aired:'', score: 8.98, status: '',path:'assets/profile/kaguya-sama.jpg'},
  {rank: 9, title: '3-gatsu no lion 2nd season', aired:'', score: 8.96, status: '',path:'assets/profile/3-gatsu.jpg'},
  {rank: 10, title: 'koe no katachi', aired:'', score: 8.96, status: '',path:'assets/profile/koe-no-katachi.jpg'},
  {rank: 11, title: 'violet evergarden', aired:'', score: 8.95, status: '',path:'assets/profile/violet-evergarden.jpg'},
  {rank: 12, title: 'clannad after story', aired:'', score: 8.94, status: '',path:'assets/profile/clannad.jpg'},
  {rank: 13, title: 'code geass: hangyaku no leloudh 2nd season', aired:'',score: 8.91, status: '',path:'assets/profile/code-geass-2nd.jpg'},
  {rank: 14, title: 'owarimonogatari 2nd season', aired:'', score: 8.90, status: '',path:'assets/profile/owarimonogatari-2nd.jpg'},
  {rank: 15, title: 'shingeki no kyojin: final season part 2', aired:'', score: 8.88, status: '',path:'assets/profile/shingeki-part2.jpg'}];


@Component({
  selector: 'SBK-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss']
})

export class RankingTableComponent {
  displayedColumns: string[] = ['rank', 'title', 'score', 'status'];
  dataSource = ELEMENT_DATA;
}
  
  // table: any[]

  // ngOnInit(): void {
  //   //  this.createTable();
  // }

  // displayedColumns: string[] = ['rank', 'title', 'score', 'status']

  // createTable(){
  //   this.table = [
  //   {rank: 1, title: 'fullmetal alchemist: brotherhood', score: 9.14, status: ''},
  //   {rank: 2, title: 'spy x family', score: 9.09, status: ''},
  //   {rank: 3, title: 'shingeki no kyojin: season 3 part 2', score: 9.08, status: ''},
  //   {rank: 4, title: 'steins;gate', score: 9.08, status: ''},
  //   {rank: 5, title: 'gintama', score: 9.08, status: ''},
  //   {rank: 6, title: 'hunter x hunter (2009)', score: 9.05, status: ''},
  //   {rank: 7, title: 'fruits basket: the final', score: 9.04, status: ''},
  //   {rank: 8, title: 'kaguya-sama wa kokurasetai', score: 8.98, status: ''},
  //   {rank: 9, title: '3-gatsu no lion 2nd season', score: 8.96, status: ''},
  //   {rank: 10, title: 'koe no katachi', score: 8.96, status: ''},
  //   {rank: 11, title: 'violet evergarden', score: 8.95, status: ''},
  //   {rank: 12, title: 'clannad after story', score: 8.94, status: ''},
  //   {rank: 13, title: 'code geass: hangyaku no leloudh 2nd season', score: 8.91, status: ''},
  //   {rank: 14, title: 'owarimonogatari 2nd season', score: 8.90, status: ''},
  //   {rank: 15, title: 'shingeki no kyojin: final season part 2', score: 8.88, status: ''}]
  // }

