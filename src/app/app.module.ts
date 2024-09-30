// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { DmarcService } from './dmarc.service'; // Ensure you import your service
import { DmarcDisplayComponent } from './dmarc-display/dmarc-display.component';
import { FormsModule } from '@angular/forms';
import { DomainListTableComponent } from './domain-list-table/domain-list-table.component';
import { AppRoutingModule } from './app-routing.module';
import { DomainListDetailsComponent } from './domain-list-details/domain-list-details.component';
import { DmarcMonitoringComponent } from './dmarc-monitoring/dmarc-monitoring.component';

@NgModule({
    declarations: [
        AppComponent,
        DmarcDisplayComponent,
        DomainListTableComponent,
        DomainListDetailsComponent,
        DmarcMonitoringComponent,
        // other components
    ],
    imports: [
        BrowserModule,
        HttpClientModule, // Add HttpClientModule here
        AppRoutingModule,
        FormsModule  // Add FormsModule here
    ],
    providers: [DmarcService], // Ensure your service is provided
    bootstrap: [AppComponent]
})
export class AppModule { }
