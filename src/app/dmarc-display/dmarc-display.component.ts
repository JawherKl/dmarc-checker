import { Component } from '@angular/core';
import { DmarcService } from '../services/dmarc.service';
import { DMARCData } from '../interfaces/dmarc';
import { DMARCApiResponse } from '../interfaces/dmarc-mxtool';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dmarc-display',
  templateUrl: './dmarc-display.component.html',
  styleUrls: ['./dmarc-display.component.css']
})
export class DmarcDisplayComponent {
  dmarcData!: DMARCData;
  dmarcDataMxToolbox!: DMARCApiResponse;
  domain!: string; // Example domain
  domainMxtoolbox!: string; // Example domain
  loading = false;
  loadingMxtoolbox = false;
  error: string | null = null;
  errorMxtoolbox: string | null = null;
  selectedTab: string = 'dmarc'; // Default selected tab

  constructor(private dmarcService: DmarcService, 
    private router: Router) {}

  ngOnInit() {
  }

  selectTab(tab: string): void {
    this.selectedTab = tab; // Change selected tab
  }

  checkDmarc() {
    this.loading = true;
    this.error = null;
    this.dmarcService.checkDmarc(this.domain).subscribe({
      next: (data) => {
        this.dmarcData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch DMARC data';
        this.loading = false;
      }
    });
  }

  fetchDMARCData(type: string) {
    this.loadingMxtoolbox = true;
    this.errorMxtoolbox = null;
    if (this.domainMxtoolbox !== undefined) {
      this.dmarcService.getDMARCData(this.domainMxtoolbox, type).subscribe({
        next: (data) => {
          this.dmarcDataMxToolbox = data;
          this.loadingMxtoolbox = false;
        },
        error: (err) => {
          this.errorMxtoolbox = 'Error fetching data';
          this.loadingMxtoolbox = false;
        }
      });
    } else {
      this.errorMxtoolbox = 'Error fetching data';
      this.loadingMxtoolbox = false;
    }
  }
  
  redirectToDomainList(): void {
    this.router.navigate(['/domains']); // Correct path
  }
}
