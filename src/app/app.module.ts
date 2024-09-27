// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { DmarcService } from './dmarc.service'; // Ensure you import your service
import { DmarcDisplayComponent } from './dmarc-display/dmarc-display.component';

@NgModule({
    declarations: [
        AppComponent,
        DmarcDisplayComponent,
        // other components
    ],
    imports: [
        BrowserModule,
        HttpClientModule, // Add HttpClientModule here
        // other modules
    ],
    providers: [DmarcService], // Ensure your service is provided
    bootstrap: [AppComponent]
})
export class AppModule { }
