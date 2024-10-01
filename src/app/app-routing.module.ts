import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainListTableComponent } from './domain-list-table/domain-list-table.component';
import { DmarcDisplayComponent } from './dmarc-display/dmarc-display.component';
import { DomainListDetailsComponent } from './domain-list-details/domain-list-details.component';
import { DmarcMonitoringComponent } from './dmarc-monitoring/dmarc-monitoring.component';

const routes: Routes = [
  { 
    path: '', 
    component: DmarcDisplayComponent
  },
  { 
    path: 'domains', 
    component: DomainListTableComponent
  },
  { 
    path: ':domain', 
    component: DomainListDetailsComponent
  },
  { 
    path: 'monitoring', 
    component: DmarcMonitoringComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
