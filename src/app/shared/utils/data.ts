import { Paginas, User } from "src/app/users"


export const usuarioDB: User[] =[
  {id:1,nombre: 'oscar', pass:'1234', perfil: {
    rol:'administrador', is_active:1
  }},
  {id:1,nombre: 'jrojas', pass:'1234', perfil: {
    rol:'visita', is_active:1
  }},
  {id:1,nombre: 'ssepulveda', pass: '1234', perfil: {
    rol:'edit', is_active:1
  }}
]
export const paginaDB: Paginas [] = [
  {id_paginas:1, nombre:'home', url:'home'},
  {id_paginas:2, nombre:'Ingenierias Metrics', url:'ingenierias'},
  {id_paginas:3, nombre:'Proyección', url:'proyeccion'},
  {id_paginas:4, nombre:'Abastecimiento', url:'abastecimiento'},
  {id_paginas:5, nombre:'Entrega', url:'entrega'},
]