import { inject } from '@angular/core';
import { CanActivateFn  } from '@angular/router';
import { take, tap, Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/login/services/auth.service';
// import { AutentificacionService } from 'src/app/shared/servicios/autentificacion.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.getAuthToken();

  // const authService = inject(AuthService);
  // const router = inject(Router);
  // return authService.isAuthenticated$().pipe(
  //   take(1),
  //   tap((isLoggedIn) =>
  //   !isLoggedIn ? router.navigate(['/sinsesion/login']) : false)
  // );
}

// @Injectable({
//   providedIn: 'root'
// })
// export class PermisosRutasService implements CanActivate {

//   constructor(private router:Router, private authPrv:AutentificacionService) { }
//   canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
//     if (!Boolean(this.authPrv.getAutenticationByToken())) {
//       return this.router.parseUrl("/sinsesion/login")
//     }
//     return Boolean(this.authPrv.getAutenticationByToken())
//   }
// }
