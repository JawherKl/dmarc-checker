import { Component } from '@angular/core';
import { DmarcService } from '../dmarc.service';
import { DMARCData } from '../interfaces/dmarc';
import { DMARCApiResponse } from '../interfaces/dmarc-mxtool';

@Component({
  selector: 'app-dmarc-display',
  templateUrl: './dmarc-display.component.html',
  styleUrls: ['./dmarc-display.component.css']
})
export class DmarcDisplayComponent {
  dmarcData!: DMARCData;
  dmarcDataMxToolbox!: DMARCApiResponse;
  domain: string = 'mails-tourmag.com'; // Example domain
  errorMessage: string = '';

  constructor(private dmarcService: DmarcService) {}

  ngOnInit() {
    this.checkDmarc(this.domain);
    this.fetchDMARCData(this.domain);
  }

  checkDmarc(domain:string) {
    this.dmarcService.checkDmarc(domain).subscribe(
      data => {
        this.dmarcData = data;
        console.log(this.dmarcData); // For debugging
      },
      error => {
        console.error('Error fetching DMARC data', error);
      }
    );
  }

  fetchDMARCData(domain: string): void {
    this.dmarcService.getDMARCData(domain).subscribe({
      next: (response) => {
        this.dmarcDataMxToolbox = response;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching DMARC data';
        console.error('There was an error!', error);
      }
    });
  }
}
