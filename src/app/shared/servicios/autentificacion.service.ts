import { Injectable } from '@angular/core';
import { usuarioDB, paginaDB } from '../utils/data'
import { Ingresar, UserInfo } from 'src/app/users';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {


  constructor() { }

  public ingresarAplicativo(userInfo:UserInfo):any{
    const {
      usuario, password
    }=userInfo
    const validUser = usuarioDB.find((user)=> usuario === user.nombre)
  if (!validUser) return alert("Usuario invalido")
       
  const userAuth = validUser.pass === password
  if (!userAuth) return alert("Contraseña invalida")

  const response = { 
    is_auth: true,
    rol: validUser.perfil.rol
  }
return response
  }

//   public habilitarLogeo(){
//   return this.ingresar;
//   }

//   public getAutenticationByToken(){
// return sessionStorage.getItem("token")
//   }

  public limpiarToken(){
    return sessionStorage.setItem("token", '')
  }

}
