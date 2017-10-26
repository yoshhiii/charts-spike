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
    { data: [90, 81, 80, 72, 60], label: 'My Scores' },
    { data: [92, 90, 95, 88, 99], label: '80th Percentile' },
    { data: [50, 60, 67, 75, 73], label: '20th Percentile' }
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
