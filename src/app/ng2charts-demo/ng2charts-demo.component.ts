import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2charts-demo',
  templateUrl: './ng2charts-demo.component.html',
  styleUrls: ['./ng2charts-demo.component.scss']
})
export class Ng2chartsDemoComponent implements OnInit {
  // Radar
  radarChartLabels: string[] = ['Knowledge', 'Judgement', 'Other thing', 'another thing', 'one more'];

  radarChartData: any = [
    { data: [90, 81, 56, 55, 40], label: 'Series A' },
    { data: [40, 19, 96, 27, 100], label: 'Series B' }
  ];
  radarChartType = 'radar';

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
