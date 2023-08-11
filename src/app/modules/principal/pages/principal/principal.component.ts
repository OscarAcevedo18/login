import { Component, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AutentificacionService } from 'src/app/shared/servicios/autentificacion.service';
import { User } from '../../../../users'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
paginas: any;
routerLink() {
throw new Error('Method not implemented.');
}
public objetoUnico = {};


constructor(private auth:AutentificacionService, private router:Router) {}
ngOnInit(): void {
  
}

public cerrarSesion(){
  this.auth.limpiarToken();
  this.router.navigateByUrl("/sinsesion/login")

}
}
