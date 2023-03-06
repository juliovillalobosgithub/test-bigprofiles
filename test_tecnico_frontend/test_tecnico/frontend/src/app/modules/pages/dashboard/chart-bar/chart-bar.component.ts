import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ChartFormat } from 'src/app/shared/interfaces/chartFormat';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css'], 
})
export class ChartBarComponent implements OnInit, OnChanges {

  @Input()
  data: ChartFormat;

  barData: any;
  barOptions: any;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit ChartBarComponent ", this.data)
    this.initCharts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initCharts();
  }

  initCharts() {
    this.barData = {
      labels: this.data.labels,
      datasets: [
        {
          label: 'Distribuzione Valori',
          borderColor: '#0c81eb',
          backgroundColor: '#4c81eb',
          data: this.data.data
        },

      ]
    };

    this.barOptions = {
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
    };
  }


}
