import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SBK-anime-cards',
  templateUrl: './anime-cards.component.html',
  styleUrls: ['./anime-cards.component.scss']
})
export class AnimeCardsComponent implements OnInit {

  
  cards: any[];

  constructor() { }

  ngOnInit(): void {
    this.createCards();
  }

  createCards(){
    this.cards = [
      {name: 'SHIKKAKUMON NO SAIKYOU KENJA', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/shikkakumon-no-saikyou-kenja/release-49018.jpg?itok=BGO7U2qY&c=36974f1238e167ceb98c0d0756bb7049'},
      {name: 'TOKYO 24-KU', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/tokyo-24-ku/release-49035.jpg?itok=lmr7EyPO&c=9c5d10b49c3e392ddeb9e5f7916d799b'},
      {name: 'KOROSHI AI', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/koroshi-ai/release-49026.jpg?itok=3QMOTBGP&c=fda1e6ca541249a2426684141e14a817'},
      {name: 'TRIBE NINE', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/tribe-nine/release-49009.jpg?itok=58ilUa1C&c=09e1a0ccfe559ac805da828168404bba'},
      {name: 'IE NAKI KO', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/ie-naki-ko/release-48546.png?itok=yVhaNVxs&c=f8ba6d86a91ee758c0d54021f4961369'},
      {name: 'ANGEL DENSETSU', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/angel-densetsu/release-49506.jpg?itok=tSc02fXn&c=8cb4d54c293941b532ac0bd16f0fa512'},
      {name: 'ANGEL COP', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/angel-cop/release-49497.jpg?itok=8jkU6i2n&c=8947aecc815d2a155d13810a162f08dc'},
      {name: 'NAPPING PRINCESS', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/napping-princess/release-49489.jpg?itok=5naBrCTt&c=788c02f1878e8c8f87f87f8c11e895b8'},
      {name: 'BARA OU NO SOURETSU', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/bara-ou-no-souretsu/release-49092.jpg?itok=NMKcXVX5&c=b269debbc57c87dfda1e1228bfd0fdb2'},
      {name: 'CUE!', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/cue/release-49064.jpg?itok=J3QFqE3Y&c=daeda0d4983f62bf286b0a6558a4fa0c'},
      {name: 'BRAIN POWERD', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/brain-powerd/release-49455.jpg?itok=Qx7jyT2c&c=febe29857400fdc4ed4a3b1aaf91b4f7'},
      {name: 'KAIJIN KAIHATSU-BU NO KUROITSU-SAN', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/kaijin-kaihatsu-bu-no-kuroitsu-san/release-49101.jpg?itok=xz1NAN3r&c=46ae63f7395dd71592c36a06342db254'},
      {name: 'ONE PIECE', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/s3fs-public/img/one-piece/release-19277.jpg?itok=9-1WQM5t&c=50f7163cadcc5e5886e2a1844328d644'},
      {name: 'ANGE VIERGE', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/s3fs-public/img/ange-vierge/release-25639.jpg?itok=WdecZBKo&c=72332a14da4dc0b1494937cfa5f2f60b'},
      {name: 'FANTASY BISHOUJO JUNIKU OJISAN TO', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/fantasy-bishoujo-juniku-ojisan-to/release-49066.jpg?itok=Dhq4JGTz&c=e6a3cafe1cb4a146c0267e0f78b6121c'},
      {name: 'SASAKI TO MIYANO', path: 'https://anb-web-d7-prod.s3.br-sao.cloud-object-storage.appdomain.cloud/styles/lancamento/s3/img/sasaki-to-miyano/release-49432.jpg?itok=6q5usaPC&c=09833d9ff321bc4884e450e55494abd7'},

   
    ]
  }

}
