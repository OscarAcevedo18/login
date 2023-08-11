import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionComponent } from './layout/public/sesion/sesion.component';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';
// import { PermisosRutasService } from './core/permisosRutas/permisos-rutas.service';
import { authGuard } from './core/permisosRutas/permisos-rutas.service';
import { PrincipalComponent } from './modules/principal/pages/principal/principal.component';
import { IngenieriasComponent } from './modules/principal/pages/ingenierias/ingenierias.component';
import { ProyeccionComponent } from './modules/principal/pages/proyeccion/proyeccion.component';
import { AbastecimientoComponent } from './modules/principal/pages/abastecimiento/abastecimiento.component';
import { EntregaComponent } from './modules/principal/pages/entrega/entrega.component';

const routes: Routes = [{
  path:'sinsesion', component:SesionComponent, loadChildren:()=>import('./modules/login/login.module').then(m => m.loginModule)
},
{
  path:'sesion', component:ContenidoComponent,canActivate:[authGuard], loadChildren:()=>import('./modules/principal/principal.module').then(m=>m.principalModule)
},
{
  path:'sesion/ingenierias', component:IngenieriasComponent,canActivate:[authGuard]
},
{
  path:'sesion/proyeccion', component:ProyeccionComponent, canActivate:[authGuard]
},
{
  path:'sesion/abastecimiento', component:AbastecimientoComponent,canActivate:[authGuard]
},
{
  path:'sesion/entrega', component:EntregaComponent, canActivate:[authGuard]
},
{
  path:"**", redirectTo:'sinsesion/login'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
