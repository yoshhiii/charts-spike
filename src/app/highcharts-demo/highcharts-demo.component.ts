import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-highcharts-demo',
  templateUrl: './highcharts-demo.component.html',
  styleUrls: ['./highcharts-demo.component.scss']
})
export class HighchartsDemoComponent implements OnInit {
  options;
  bulletChart = true;
  scatter = false;
  radarChart = false;

  constructor() {
    this.options = {
      title: { text: 'bullet chart' },
      chart: {
        inverted: true,
        marginLeft: 135,
        type: 'bullet'
      },
      series: [{
        data: [{
          y: 78,     // The value of a point
          target: 90 , // The target value of a point
          name: "Point1",
          color: "#00FF00"
        },
        {
          y: 85,     // The value of a point
          target: 95  // The target value of a point
        },
        {
          y: 72,     // The value of a point
          target: 88,  // The target value of a point
        }],
        targetOptions: { // Options related with look and positiong of targets
          width: '140%',        // The width of the target
          height: 3,            // The height of the target
          borderWidth: 0,       // The border width of the target
          borderColor: 'black', // The border color of the target
          color: 'black'
        }
      }]
    };
  }
  ngOnInit() {
  }

  loadBullet() {
    if (!this.bulletChart) {
      this.bulletChart = true;
      this.radarChart = false;
      this.scatter = false;
    }
  }

  loadRadar() {
    if (!this.radarChart) {
      this.radarChart = true;
      this.bulletChart = false;
      this.scatter = false;
    }
  }

  loadScatter() {
    if (!this.scatter) {
      this.scatter = true;
      this.bulletChart = false;
      this.radarChart = false;
    }
  }


}
