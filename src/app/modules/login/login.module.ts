import { NgModule } from "@angular/core"
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { loginRoutingModule } from "./login-routing.module";
import { RpasswordComponent } from './pages/rpassword/rpassword.component';

@NgModule({
  declarations:[LoginComponent, RpasswordComponent],
  imports:[CommonModule, FormsModule, ReactiveFormsModule, loginRoutingModule]
})
export class loginModule {

}