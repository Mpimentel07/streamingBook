import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl,  Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field'
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import { MainPageHeaderComponent } from '../../main-page/main-page-header/main-page-header.component';
import { AuthService } from 'src/app/auth.service';
 
 
 
@Component({
  selector: 'SBK-dialog',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 
 
  signUpForm: FormGroup
 
  username: string
  password: string
  email: string
  success: string
  errors: string[]
 
 
  constructor( 
    public dialogRef: MatDialogRef<SignUpComponent>,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private authService: AuthService
    ) { }
 
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['',[ Validators.email, Validators.required]]
    })
 }
 
 onSubmit(){
   const formValues = this.signUpForm.value
   const usuario: Usuario = new Usuario(formValues.username,  formValues.password, formValues.email)
   this.authService.save(usuario).subscribe(response =>{
    console.log(usuario)
    this.closeModal()

   }, errorResponse => {
    this.success = null
    this.errors = errorResponse.error.errors;
   })
 } 
 
  closeModal(): void {
    this.dialogRef.close();
  } 
}
