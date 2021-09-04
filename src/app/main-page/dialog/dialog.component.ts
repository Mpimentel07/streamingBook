import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl,  Validators } from '@angular/forms';
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


  signForm: FormGroup

  username: string
  password: string
  email: string
  loginError: boolean

  constructor( 
    public dialogRef: MatDialogRef<DialogComponent>,
    private usuarioService: UsuarioService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      username: ['', Validators.required],
      email: ['',[ Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
 }

 onSubmit(){
   const formValues = this.signForm.value
   const usuario: Usuario = new Usuario(formValues.username, formValues.email, formValues.password)
   this.usuarioService.save(usuario).subscribe(response =>{
     this.closeModal()
   })
 }


  closeModal(): void {
    this.dialogRef.close();
  }




}

