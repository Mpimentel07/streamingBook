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
      {name: 'Shokugeki no Souma', path: 'https://cdn2.anbient.com/cdn/farfuture/Gy-Dmt5fH3rxJ5pm5yFveNN7wdPENkqex83cMlmVz_A/mtime:1593743340/files/styles/lancamento/public/img/shokugeki-no-souma-shin-no-sara/release-43807.png?itok=GziATnbl&c=fc9a156a59769b855882fed4d40081ef'},
      {name: 'One Piece', path: 'https://cdn2.anbient.com/cdn/farfuture/aqJuPHH1hKwmuaaEtaY6WXoELR7FO0ieHux3inXwV90/mtime:1541155294/files/styles/lancamento/public/img/one-piece/release-19277.jpg?itok=4j2tdnNp&c=50f7163cadcc5e5886e2a1844328d644'},
      {name: 'Pokemon', path: 'https://cdn2.anbient.com/cdn/farfuture/yGDaCs1lBpxbJpByeNpVn9LTD7XL50RiPXf09tJ1YoA/mtime:1579174245/files/styles/lancamento/public/img/pokemon-2019/release-44145.png?itok=yvjNKIvv&c=c83aa18166ade0e31075e5ef24bf7cb6'},
      {name: 'Shokugeki no Souma', path: 'https://cdn2.anbient.com/cdn/farfuture/Gy-Dmt5fH3rxJ5pm5yFveNN7wdPENkqex83cMlmVz_A/mtime:1593743340/files/styles/lancamento/public/img/shokugeki-no-souma-shin-no-sara/release-43807.png?itok=GziATnbl&c=fc9a156a59769b855882fed4d40081ef'},
      {name: ' Healin Good Precure', path: 'https://cdn2.anbient.com/cdn/farfuture/0jWS41TsJqWW9oHtk_xi8JKzd9rSMPsXfwsrS97LSTI/mtime:1580814503/files/styles/lancamento/public/img/healin-good-precure/release-44282.jpg?itok=_7qQesH-&c=7729bcb95f9779131c974c7d3d213082'},
      {name: 'Plunderer', path: 'https://cdn2.anbient.com/cdn/farfuture/q-xqBA4ZCxM6gATUFuiUTaTDY7js6ayHsO9gy5fnBsM/mtime:1578717868/files/styles/lancamento/public/img/plunderer/release-44104.jpg?itok=tb2ZU5uP&c=3192532ba777d7a9ee40b164661ef9b9'},
      {name: 'Hachi-nan Sore Wa Nai Deshou', path: 'https://cdn2.anbient.com/cdn/farfuture/0yydULlRtI1_UkNNA6JVj7kNxaUWmrx6t-SXdpsdYTY/mtime:1589130226/files/styles/lancamento/public/img/hachi-nan-tte-sore-wa-nai-deshou/release-44691.jpg?itok=daX-jNLK&c=1ea31c753dd6313ee91bf61c484dfcb2'},
      {name: 'Tsugu Tsugumomo', path: 'https://cdn2.anbient.com/cdn/farfuture/fdJP-QFjutpc03sbCtrleHavyXuM56YjSGB8DEV0jp4/mtime:1589125609/files/styles/lancamento/public/img/tsugu-tsugumomo/release-44613.jpg?itok=uYiBk4xS&c=7da8e6c643d3d15d561911dafea02f53'},
      {name: 'Shokugeki no Souma', path: 'https://cdn2.anbient.com/cdn/farfuture/Gy-Dmt5fH3rxJ5pm5yFveNN7wdPENkqex83cMlmVz_A/mtime:1593743340/files/styles/lancamento/public/img/shokugeki-no-souma-shin-no-sara/release-43807.png?itok=GziATnbl&c=fc9a156a59769b855882fed4d40081ef'},
      {name: 'Shironeko Project: Zero Chronicle', path: 'https://cdn2.anbient.com/cdn/farfuture/TF8nSnJ_hIQfDx8-zZ0bOaCrenhFF8HBoauW2u8_NnA/mtime:1590952858/files/styles/lancamento/public/img/shironeko-project-zero-chronicle/release-44918.jpg?itok=YXTXci6f&c=b0df01c85b75c589cc8931ba4e39aa53'},
      {name: 'Arte', path: 'https://cdn2.anbient.com/cdn/farfuture/kxJ9i4kCrdp-8461VM97WHuCYL3c1wtljaFC1Z2CZ2M/mtime:1587142058/files/styles/lancamento/public/img/arte/release-44643.jpg?itok=4drHiWtT&c=2a8ced20764587c2d1b5c6cd0e548146'},
      {name: 'Gal to Kyouryuu', path: 'https://cdn2.anbient.com/cdn/farfuture/Kl0D6WVceWqhxPnMLRrxQSk-q2Eezp_TzjMxgSLBY9w/mtime:1587142286/files/styles/lancamento/public/img/gal-to-kyouryuu/release-44651.jpg?itok=1ZWWay_5&c=b1cfec7c3261b5941ad077d8fa11ac79'},
      {name: 'Nekopara', path: 'https://cdn2.anbient.com/cdn/farfuture/0bb95W4dsxVKLTvn6zVN7DX8n3jcRE50xFoNjKmhilI/mtime:1579327489/files/styles/lancamento/public/img/nekopara/release-44170.png?itok=xRuJb7Dy&c=83aae416c421a703b705301a16f35be6'},
      {name: 'Kakushigoto', path: 'https://cdn2.anbient.com/cdn/farfuture/Ab9frG0Ilf4z-lLAXiezBeXn69pUKlB-9aH8CxhjQSg/mtime:1586836660/files/styles/lancamento/public/img/kakushigoto/release-44606.jpg?itok=YIVh9JqQ&c=f491e51051ec3339d899b15c4e3b05b1'},
      {name: 'Kakushigoto', path: 'https://cdn2.anbient.com/cdn/farfuture/Ab9frG0Ilf4z-lLAXiezBeXn69pUKlB-9aH8CxhjQSg/mtime:1586836660/files/styles/lancamento/public/img/kakushigoto/release-44606.jpg?itok=YIVh9JqQ&c=f491e51051ec3339d899b15c4e3b05b1'},
      {name: 'Kakushigoto', path: 'https://cdn2.anbient.com/cdn/farfuture/Ab9frG0Ilf4z-lLAXiezBeXn69pUKlB-9aH8CxhjQSg/mtime:1586836660/files/styles/lancamento/public/img/kakushigoto/release-44606.jpg?itok=YIVh9JqQ&c=f491e51051ec3339d899b15c4e3b05b1'},

   
    ]
  }

}
