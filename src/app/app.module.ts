import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartModule } from 'angular2-highcharts';
import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';

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
    NvD3Module, // ng2 d3
    ChartsModule, // ng2-Charts
    ChartModule.forRoot(
      require('highcharts'),
      require('highcharts/modules/bullet')
    ) // Highcharts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // require;
}
