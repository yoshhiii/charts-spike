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

  scatterType = 'scatter';
  scatterData: any = [
    { label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }]
    },
    { label: 'Scatter Dataset 2',
    data: [{
      x: -15,
      y: 6
    }, {
      x: 4,
      y: 14
    }, {
      x: 16,
      y: 7
    }]
  }
  ];
  scatterOptions = {
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    }
  };

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
