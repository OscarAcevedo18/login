import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(){}

getAuthToken(): Observable<boolean>{
  return of(true);
}
// private readonly isLoggedIn = new BehaviorSubject<boolean>(true);

// isAuthenticated$(): Observable<boolean> {
//   return this.isLoggedIn
// }
};
