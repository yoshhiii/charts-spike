import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highcharts-demo',
  templateUrl: './highcharts-demo.component.html',
  styleUrls: ['./highcharts-demo.component.scss']
})
export class HighchartsDemoComponent implements OnInit {
  chart: Object;
  options = {};

  constructor() {
    this.options = {
      title : { text : 'simple chart' },
      series: [{
          data: [29.9, 71.5, 106.4, 129.2],
      }]
  };
  }

  ngOnInit() {
    // setInterval(() => this.options.series[0][0].addPoint(Math.random() * 10), 1000);
    console.log(this.options);
    // this.addPoint();
  }

}
