import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/shared/servicios/autentificacion.service';
import { Ingresar, Paginas, Perfil, User} from '../../../../users'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm!:FormGroup;


  constructor(private fb:FormBuilder, private loginProv:AutentificacionService,
    private routerprov:Router) {}

  ngOnInit() {
    this.myForm = this.createMyForm();
    
  }

  private createMyForm():FormGroup{
return this.fb.group({
  usuario:['', [Validators.required]],
  password:['', [Validators.required]]
});
  }

  public submitFormulario(){
    const logger = this.loginProv.ingresarAplicativo(this.myForm.value)
    console.log(logger.is_auth);
    
    if (!logger.is_auth) return

    // if(this.myForm.invalid){
    //   Object.values(this.myForm.controls).forEach(control=>{
    //     control.markAllAsTouched();
    //   })
      
return this.login(logger)
    
  }

public login (userInfo:Ingresar):any{
const {
  rol
}= userInfo
if(rol == 'administrador')return this.routerprov.navigateByUrl("/sesion/principal")
if(rol == 'visita')return this.routerprov.navigateByUrl("/sesion/proyeccion")
if(rol == 'edit')return this.routerprov.navigateByUrl("/sesion/abastecimiento")

}

  public get f():any{
    return this.myForm.controls;
  }
}
