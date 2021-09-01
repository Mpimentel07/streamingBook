import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'SBK-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  constructor(
    private usuarioService: UsuarioService

  ) { }

  ngOnInit(): void {

    }

}
