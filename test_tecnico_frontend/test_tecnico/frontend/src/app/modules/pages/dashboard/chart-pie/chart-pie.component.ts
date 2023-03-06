import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartPieComponent implements OnInit {

  @Input()
  data: any;

  pieOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (value: any) {
            return value.formattedValue + '%';
          }
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          color: '#ebedef',

        },
        title: {
          display: true,
          text: 'Percentuale Errori',
          color: '#ebedef',
        },

      }
    }
  };
  ;


  constructor() {
  }

  ngOnInit() {
    console.log("ngOnInit ChartPieComponent ", this.data)
  }

}
