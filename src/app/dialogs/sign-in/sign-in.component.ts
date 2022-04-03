import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl,  Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { AuthService } from 'src/app/auth.service';

import { Usuario } from '../../usuario';
import { SignUpComponent } from '../sign-up/sign-up.component';


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

  error: boolean 
  success: boolean

  errors: String []
 
  constructor( 
    public dialogRef: MatDialogRef<SignInComponent>,
    public dialog: MatDialog,
    private authService: AuthService,
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
   this.authService.tentarLogar(this.username, this.password)
                   .subscribe(response =>{
                     const accessToken = JSON.stringify(response)
                     localStorage.setItem('accessToken', accessToken)
                      this.success = true
                      this.error = false
                      this.username = ''
                      this.password = ''
                      this.errors = []    
                      this.closeModal()
                    }, errorResponse =>{
                      this.success = false
                      this.error = true
                      this.errors = ['Usuário e/ou Senha Incorretos']
                      console.log('Erro apresentado: ', errorResponse.error)
                    })
 } 
 
  closeModal(): void {
    this.dialogRef.close();
  }

  openDialogSignUp(): void {
    this.closeModal()
    const dialogRef = this.dialog.open(SignUpComponent, {
      
    });
    dialogRef.afterClosed().subscribe(result => {
     });
  }
 

}
