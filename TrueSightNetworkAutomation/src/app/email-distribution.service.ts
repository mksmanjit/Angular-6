import { AuthService } from './auth.service';
import { EmailDistribution } from './models/email-distribution';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, switchMap, flatMap } from 'rxjs/operators';
import { Token } from 'src/app/models/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailDistributionService {
  token: Token;
  url = 'https://localhost:8443/bca-networks/api/v3.0/';

  constructor(private http: HttpClient, private auth: AuthService) { }

  getEmailDistributionLists() {
      const httpOption = {
        headers: new HttpHeaders({
          'Accept': 'application/json'
        })
      };
      return this.http.get<EmailDistribution[]>(this.url + 'email_distribution_lists', httpOption);
    }
  }
