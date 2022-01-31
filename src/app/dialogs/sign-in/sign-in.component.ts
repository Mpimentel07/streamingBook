import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl,  Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';


@Component({
  selector: 'SBK-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup
 
  username: string
  password: string
  email: string
  loginError: boolean 
 
  constructor( 
    public dialogRef: MatDialogRef<SignInComponent>,
    private usuarioService: UsuarioService,
    private fb: FormBuilder
    ) { }
 
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
 }
 
 onSubmit(){
   const formValues = this.signInForm.value
   const usuario: Usuario = new Usuario(formValues.username, formValues.password)
   this.usuarioService.save(usuario).subscribe(response =>{
    this.closeModal()
   })
 } 
 
  closeModal(): void {
    this.dialogRef.close();
  }
 

}
