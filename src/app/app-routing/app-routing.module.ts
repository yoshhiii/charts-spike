import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3DemoComponent } from '../d3-demo/d3-demo.component';
import { Ng2chartsDemoComponent } from '../ng2charts-demo/ng2charts-demo.component';
import { HighchartsDemoComponent } from '../highcharts-demo/highcharts-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'd3Demo', pathMatch: 'full' },
  { path: 'd3Demo', component: D3DemoComponent },
  { path: 'ng2charts', component: Ng2chartsDemoComponent },
  { path: 'highchartsDemo', component: HighchartsDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
