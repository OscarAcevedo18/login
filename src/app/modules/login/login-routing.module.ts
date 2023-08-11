import { NgModule } from "@angular/core"
import { RouterModule, Routes} from "@angular/router"
import { LoginComponent } from "./pages/login/login.component";
import { RpasswordComponent } from "./pages/rpassword/rpassword.component";

const rutas:Routes = [{
  path:'', children:[
    {path:'login', component:LoginComponent},
    {path:'rcontraseña', component:RpasswordComponent}

  ]
}];
@NgModule({imports:[RouterModule.forChild(rutas)],
exports:[RouterModule]})
export class loginRoutingModule {

}