import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/shared/servicios/autentificacion.service';

@Component({
  selector: 'app-ingenierias',
  templateUrl: './ingenierias.component.html',
  styleUrls: ['./ingenierias.component.css']
})
export class IngenieriasComponent implements OnInit {
  paginas: any;
  onNavClick() {
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
