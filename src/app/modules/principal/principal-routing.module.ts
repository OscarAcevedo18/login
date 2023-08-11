import { NgModule } from "@angular/core"
import { RouterModule, Routes} from "@angular/router"
import { PrincipalComponent } from "./pages/principal/principal.component";
import { IngenieriasComponent } from "./pages/ingenierias/ingenierias.component";
import { ProyeccionComponent } from "./pages/proyeccion/proyeccion.component";
import { AbastecimientoComponent } from "./pages/abastecimiento/abastecimiento.component";
import { EntregaComponent } from "./pages/entrega/entrega.component";


const rutas:Routes = [{
  path:'', children:[
    {path:'principal', component: PrincipalComponent},
    {path:'ingenierias', component: IngenieriasComponent},
    {path:'proyeccion', component: ProyeccionComponent},
    {path:'abastecimiento', component: AbastecimientoComponent},
    {path:'entrega', component: EntregaComponent},


  ]
}];
@NgModule({
  imports:[RouterModule.forChild(rutas)],
  exports:[RouterModule]})
export class principalRoutingModule {

}