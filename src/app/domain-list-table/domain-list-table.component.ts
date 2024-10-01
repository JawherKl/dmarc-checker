import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DmarcService } from '../services/dmarc.service';

@Component({
  selector: 'app-domain-list-table',
  templateUrl: './domain-list-table.component.html',
  styleUrls: ['./domain-list-table.component.css']
})
export class DomainListTableComponent implements OnInit {

  constructor(private router: Router, private dmarcService: DmarcService) { }

  ngOnInit(): void {}

  redirectToSearchDomain(): void {
    this.router.navigate(['/']); // Correct path
  }

  redirectToDomainDetails(domain: string): void {
    this.router.navigate(['/details', domain]); // Correct path
  }

  downloadJson() {
    throw new Error('Method not implemented.');
  }
  

  fetchAndDownloadData(domain: string, type:string): void {
    this.dmarcService.getDmarcData(domain, type).subscribe(
      (data) => {
        this.dmarcService.downloadCSV(data, 'dmarc_data.csv');
      },
      (error) => {
        console.error('Error fetching DMARC data', error);
      }
    );
  }
}
