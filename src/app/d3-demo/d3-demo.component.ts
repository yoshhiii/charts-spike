import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterStateSnapshot } from '@angular/router';

declare let d3: any;

@Component({
  selector: 'app-d3-demo',
  templateUrl: './d3-demo.component.html',
  styleUrls: ['./d3-demo.component.scss']
})
export class D3DemoComponent implements OnInit {
  bulletOptions;
  data1;
  data2;
  data3;
  data4;
  data5;

  radarOptions;
  radarData;

  scatterChart;
  scatterData;

  bulletChart = true;
  radarChart = false;
  scatter = false;

  constructor() {
  }

  ngOnInit() {
    this.bulletOptions = {
      chart: {
        type: 'bulletChart',
        duration: 500,
        width: 800,
        height: 55
        // color: 'black' // change fill color of bars
      }
    };

    this.data1 = {
      title: 'Knowledge',
      // subtitle: 'US$, in thousands',
      ranges: [20, 80, 100],
      measures: [81],
      markers: [90],
      color: 'black'
    };

    this.data2 = {
      title: 'Judgement',
      ranges: [20, 80, 100],
      measures: [75],
      markers: [92]
    };

    this.data3 = {
      title: 'ECG and Arrhythmia',
      ranges: [20, 80, 100],
      measures: [88],
      markers: [95]
    };

    this.data4 = {
      title: 'Venous Access',
      ranges: [20, 80, 100],
      measures: [79],
      markers: [88]
    };

    this.data5 = {
      title: 'Managing the Airway',
      ranges: [20, 80, 100],
      measures: [65],
      markers: [93]
    };

    this.radarOptions = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) { return d.key; },
        y: function (d) { return d.y; },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    this.radarData = [
      {
        key: "One",
        y: 5
      },
      {
        key: "Two",
        y: 2
      },
      {
        key: "Three",
        y: 9
      }
    ];

    this.scatterChart = {
      chart: {
        type: 'scatterChart',
        height: 450,
        color: d3.scale.category10().range(),
        scatter: {
          onlyCircles: false
        },
        showDistX: true,
        showDistY: true,
        duration: 500,
        xAxis: {
          axisLabel: 'Knowledge',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Judgement',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -5
        }
      }
    };

    this.scatterData = this.generateDataScatter(3, 40);

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

  generateDataScatter(groups, points) {
    const data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

    for (var i = 0; i < groups; i++) {
      data.push({
        key: 'Group ' + i,
        values: []
      });

      for (var j = 0; j < points; j++) {
        data[i].values.push({
          x: random()
          , y: random()
          , size: Math.random()
          //  , shape: shapes[j % 6]
        });
      }
    }
    return data;
  }
}
