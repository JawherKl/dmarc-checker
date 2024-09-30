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
  private apiUrl = 'http://localhost:9060/checkdmarc'; // Update with actual API URL
  private apiUrlMxToolbox = 'https://api.mxtoolbox.com/api/v1/Lookup';
  private apiKeyMxToolbox = '7a2cbc03-c147-464d-a458-4aa32df924f4';

  constructor(private http: HttpClient) { }

  checkDmarc(domain: string): Observable<DmarcResponse> {
    const body = {
      domain: domain,
      format: 'json'
    };
    return this.http.post<DmarcResponse>(this.apiUrl, body);
  }
  getDmarcData(domain: string, type: string): Observable<any> {
    const payload = {
      domain: domain,
      format: type
    };
    return this.http.post<any>(this.apiUrl, payload);
  }
  
  downloadCSV(data: any[], filename: string): void {
    const blob = new Blob(data, { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    a.style.visibility = 'hidden';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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