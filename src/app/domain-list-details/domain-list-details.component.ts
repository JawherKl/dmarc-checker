import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DMARCData } from '../interfaces/dmarc';
import { DMARCApiResponse } from '../interfaces/dmarc-mxtool';
import { DmarcService } from '../services/dmarc.service';

@Component({
  selector: 'app-domain-list-details',
  templateUrl: './domain-list-details.component.html',
  styleUrls: ['./domain-list-details.component.css']
})
export class DomainListDetailsComponent implements OnInit {
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
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.domain = params['domain']; // Get the domain value from the route params
      this.domainMxtoolbox = params['domain'];
      this.checkDmarc();
      this.fetchDMARCData();
    });
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

  fetchDMARCData() {
    this.loadingMxtoolbox = true;
    this.errorMxtoolbox = null;
    if (this.domainMxtoolbox !== undefined) {
      this.dmarcService.getDMARCData(this.domainMxtoolbox, 'dmarc').subscribe({
        next: (data) => {
          this.dmarcDataMxToolbox = data;
          this.loadingMxtoolbox = false;
        },
        error: (err) => {
          this.errorMxtoolbox = 'Error fetching DMARC data';
          this.loadingMxtoolbox = false;
        }
      });
    } else {
      this.errorMxtoolbox = 'Error fetching DMARC data';
      this.loadingMxtoolbox = false;
    }
  }
  
  redirectToDomainList(): void {
    this.router.navigate(['/domains']); // Correct path
  }
}
