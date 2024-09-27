import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DMARCApiResponse } from './interfaces/dmarc-mxtool';

interface DmarcResponse {
  base_domain: string;
  dmarc: any; // Define more specific interface according to your needs
  dnssec: boolean;
  domain: string;
  mta_sts: any;
  mx: any;
  ns: any;
  smtp_tls_reporting: any;
  spf: any;
}

@Injectable({
  providedIn: 'root'
})
export class DmarcService {
  private apiUrl = 'http://localhost:5000/checkdmarc'; // Update with actual API URL
  private apiUrlMxToolbox = 'https://api.mxtoolbox.com/api/v1/Lookup';
  private apiKeyMxToolbox = 'your-value-of-api-key-mxtoolbox';

  constructor(private http: HttpClient) { }

  checkDmarc(domain: string): Observable<DmarcResponse> {
    const body = {
      domain: domain,
      format: 'json'
    };
    return this.http.post<DmarcResponse>(this.apiUrl, body);
  }

  getDMARCData(domain: string): Observable<DMARCApiResponse> {
    const headers = new HttpHeaders({
      'Authorization': this.apiKeyMxToolbox
    });

    const params = {
      command: 'dmarc',
      argument: domain
    };

    return this.http.get<DMARCApiResponse>(this.apiUrlMxToolbox, { headers, params });
  }
}
