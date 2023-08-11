//CREATE INTERFACE USERS
export interface User {
  id: number;
  nombre: string;
  pass: string;
  perfil: Perfil;
}

export interface Perfil{
  rol: string;
  is_active: number;
}

export interface Paginas{
  id_paginas: number;
  nombre: string;
  url: string;
}

export interface UserInfo {
  usuario: string;
  password: string;
}

export interface Ingresar {
  is_auth:boolean;
  rol:string;
}