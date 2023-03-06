import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartBarComponent implements OnInit {

  @Input()
  data: any;

  barOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ebedef'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ebedef',
          font: {
            weight: 500
          }
        },
        grid: {
          color: ['#ebedef'],
          drawBorder: false
        },
        title: {
          display: true,
          text: 'Valori',
          color: '#ebedef',
        }
      },
      y: {
        ticks: {
          color: '#ebedef'
        },
        grid: {
          color: ['#ebedef'],
          drawBorder: false
        },
        title: {
          display: true,
          text: 'Conteggio',
          color: '#ebedef',
        }
      },
    }
  };;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit ChartBarComponent ", this.data)
  }

}
