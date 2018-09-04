import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AnalyticsImplementation,
  Metric
} from './interfaces/analytics.interface';
import { AnalyticsService } from './services/analytics.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://devserver/' },
    {
      provide: AnalyticsService,
      deps: [ HttpClient, 'API_URL'],
      useFactory(http: HttpClient, apiUrl: string) {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent(metric: Metric): void {
            console.log('The metric is: ', metric);
            console.log('Sending to: ', apiUrl);
            // ... the metric would be sent here.
          }
        };

        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  declarations: []
})
export class AnalyticsModule { }
