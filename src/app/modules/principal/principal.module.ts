import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrincipalComponent } from './pages/principal/principal.component';
import { principalRoutingModule } from "./principal-routing.module";
import { AbastecimientoComponent } from './pages/abastecimiento/abastecimiento.component';
import { ProyeccionComponent } from './pages/proyeccion/proyeccion.component';
import { EntregaComponent } from './pages/entrega/entrega.component';
import { IngenieriasComponent } from "./pages/ingenierias/ingenierias.component";


@NgModule({
  declarations:[
    PrincipalComponent,
    IngenieriasComponent,
    AbastecimientoComponent,
    ProyeccionComponent,
    EntregaComponent,

  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    principalRoutingModule
  ]
})
export class principalModule {

}