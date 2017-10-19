import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { D3DemoComponent } from './d3-demo/d3-demo.component';
import { Ng2chartsDemoComponent } from './ng2charts-demo/ng2charts-demo.component';
import { HighchartsDemoComponent } from './highcharts-demo/highcharts-demo.component';

declare var require: any;
@NgModule({
  declarations: [
    AppComponent,
    D3DemoComponent,
    Ng2chartsDemoComponent,
    HighchartsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule, // ng2-Charts
    ChartModule.forRoot(require('highcharts')) // Highcharts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
