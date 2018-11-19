import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Token } from 'src/app/models/token';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  url = 'https://localhost:8443/bca-networks/api/token';
  constructor(private http: HttpClient, private route: ActivatedRoute) {
   }

  public get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public changedValue(changed) {
    this.loggedIn.next(changed);
  }

  login(username, password) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.doLogin(username, password);

  }

   private doLogin(username, password) {
    const httpOption = {
      headers: new HttpHeaders({
         'Content-Type': 'application/x-www-form-urlencoded',
         'Accept': 'application/json'
        })
    };
    return this.http.post<Token>(this.url,
      'grant_type=password&username=' + username + '&password=' + password, httpOption);
   }

   public getToken() {
    return localStorage.getItem('token');
   }

   logOut() {
     this.http.delete(this.url);
     localStorage.removeItem('token');
     localStorage.removeItem('username');
   }
}
