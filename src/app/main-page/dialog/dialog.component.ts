import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field'
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';



@Component({
  selector: 'SBK-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<DialogComponent>,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    const usuario: Usuario = new Usuario()
    usuario.email ='teste4@teste'
    usuario.password ='123'
    usuario.username='Teste4'

    this.usuarioService.save(usuario).subscribe(response => {
      console.log(response)
    })
  }


  cancelar(): void {
    this.dialogRef.close();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}





