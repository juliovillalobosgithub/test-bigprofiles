import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit, OnChanges {

  @Input()
  percent: number;

  pieData: any;
  pieOptions: any;


  constructor() {
  }

  ngOnInit() {
    this.initCharts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initCharts();
  }

  initCharts() {
    
    let percentTemp = Math.round(this.percent);

    this.pieData = {
      labels: ['Errori', 'Totale'],
      datasets: [
        {
          data: [percentTemp, 100 - percentTemp],
          backgroundColor: [
            '#F48FB1',
            '#4c81eb'
          ],
          hoverBackgroundColor: [
            '#F49FB1',
            '#6c81eb'
          ],
          borderColor: ['#ebedef']
        }]
    };


    this.pieOptions = {
      plugins: {
        tooltip: {
          callbacks: {
            label: function(value:any){
              return  value.formattedValue +'%';
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

  }


}
