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
      {name: 'Boku no Hero Academia', path: 'https://cdn.anbient.com/cdn/farfuture/UG_WRfbzsr1zHuxBwuMgiGfwBUuPjCUaCbBX1Jm6GVY/mtime:1625068494/files/styles/lancamento/public/img/boku-no-hero-academia-5/release-47395.jpg?itok=s6abb3HK&c=e6a3cafe1cb4a146c0267e0f78b6121c'},
      {name: 'Edens Zero', path: 'https://cdn.anbient.com/cdn/farfuture/2JqQC0_cG1oEcOVPaFVjxrv5JWVlfpqw37dy5Q7w60k/mtime:1618956369/files/styles/lancamento/public/img/edens-zero/release-46988.jpg?itok=B9VqWzsp&c=7f699ae2775dc13116796af6ee85d375'},
      {name: 'Scarlet Nexus', path: 'https://cdn.anbient.com/cdn/farfuture/D2EDfwPdqi7yUc_HaPVlNOF4QQbAHz0L_0Hc217_xPE/mtime:1629921113/files/styles/lancamento/public/img/scarlet-nexus/release-47636.jpg?itok=j4ZWJdHD&c=54dba1c4108a5087865b0a010c0322d6'},
      {name: 'Konbini Kareshi', path: 'https://www.anbient.com/files/styles/lancamento_destaque/public/img/konbini-kareshi/release-33331.jpg?itok=FMflVZbN&c=d9c18d5e0bace1f2c4de8243fbc6a12a'},
      {name: 'One Piece', path: 'https://cdn.anbient.com/cdn/farfuture/bPJZHzO6JyB_bbkPTVC-a40BBiKWld8kXegwjzHV68Y/mtime:1614519852/files/styles/lancamento/public/img/one-piece/release-19277.jpg?itok=ADBvb_jL&c=50f7163cadcc5e5886e2a1844328d644'},
      {name: 'Genjitsu Shugi Yuusha no Oukoku', path: 'https://cdn.anbient.com/cdn/farfuture/bBU1BGNQYehrfJ9bDYXihoDTgN7mHdJZKBZA0cGCk8Q/mtime:1627935714/files/styles/lancamento/public/img/genjitsu-shugi-yuusha-no-oukoku-saikenki/release-47565.jpg?itok=Y-iMb6JW&c=e6a3cafe1cb4a146c0267e0f78b6121c'},
      {name: 'Azur Lane: Bisoku Zenshin', path: 'https://cdn.anbient.com/cdn/farfuture/eEFrclqHsJEaD0MqpeI1Wd7uwo4774zuv8yiXaCTMnA/mtime:1627935788/files/styles/lancamento/public/img/azur-lane-bisoku-zenshin/release-47590.jpg?itok=4Ha95E0z&c=d446b1c7eff9f48e2b17df9bfdf18cf7'},
      {name: 'Beastars 2nd Season', path: 'https://cdn.anbient.com/cdn/farfuture/4Uvr0x9bLmAGvqhQN7AmMZyC5w-QwCO8IcA-NmtiO9E/mtime:1627601427/files/styles/lancamento/public/img/beastars-2nd-season/release-47522.jpg?itok=7JxkPEMc&c=fda1e6ca541249a2426684141e14a817'},
      {name: 'Tokyo Revengers', path: 'https://www.anbient.com/files/styles/lancamento/public/img/tokyo-revengers/release-46927.jpg?itok=4DnQpOWG&c=e6a3cafe1cb4a146c0267e0f78b6121c'},
      {name: 'Night Head', path: 'https://cdn.anbient.com/cdn/farfuture/2zsAbWCkycDGu3O4HlCJ5gLBcMonafD5PPKn90wnnKM/mtime:1627595568/files/styles/lancamento/public/img/night-head-2041/release-47500.jpg?itok=I2FYK_2W&c=084dc8e58ed16eab35e331810783fac6'},
      {name: 'Kumo Desu Ga', path: 'https://cdn.anbient.com/cdn/farfuture/54ZKDzJwj6Ntc-A85wlQ4EJ65AFv4XDUhBoPRoH5ALU/mtime:1626057930/files/styles/lancamento/public/img/kumo-desu-ga-nani-ka/release-46569.jpg?itok=9QFir67d&c=a84a41c0b9e8a688105479bfc7769365'},
      {name: 'Majo no Tabitabi', path: 'https://cdn.anbient.com/cdn/farfuture/Q7_eCbjnWC4dMUNOmq3JR8DFqVHX6CE4Rqq7n6-bx4U/mtime:1625066183/files/styles/lancamento/public/img/majo-no-tabitabi/release-45709.jpeg?itok=B8HN36QR&c=6b13384a62236423d9b099aad04a2848'},
      {name: 'Shingeki No Kyojin - Final Season', path: 'https://cdn.anbient.com/cdn/farfuture/LywV1rOLi-5GWQCC2zJ7b5wrD5pCYFS8O6mFQeAqiEM/mtime:1614609968/files/styles/lancamento/public/img/shingeki-no-kyojin-season-4/release-46531.png?itok=1THJ5lS_&c=d98c4647d394a8d9d76043bd31f89734'},
      {name: 'Ling QI 2 (Completo)', path: 'https://www.anbient.com/files/styles/lancamento/public/img/ling-qi-2/release-47646.jpg?itok=UiU7nqrQ&c=d111dbe02776f03fd49ae24e8d4071ca'},
      {name: 'Nagatoro-San', path: 'https://www.anbient.com/files/styles/lancamento/public/img/ijiranaide-nagatoro-san/release-46968.jpg?itok=xXufVNh8&c=476a2f6d2fce0e1e121dbe94f16bc8a4'},
      {name: 'Hataraku Saibou', path: 'https://cdn.anbient.com/cdn/farfuture/kU501mdw51JSCbgPL8_gVvyYWYInMgtgcA6hk7SjLBo/mtime:1625018145/files/styles/lancamento/public/img/hataraku-saibou/release-47386.jpg?itok=Hb5gNgZN&c=77166e38eaccbc188c7b865aae18ca58'},

   
    ]
  }

}
