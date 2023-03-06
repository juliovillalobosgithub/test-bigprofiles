import { Component, OnInit } from '@angular/core';
import { map, tap, Observer } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Retrive } from '../../../shared/interfaces/retrive.interface';
import { ChartFormat } from 'src/app/shared/interfaces/chartFormat';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  response: Retrive;

  chiamateTotali: number;
  erroriTotali: number;
  tempoRispostaMedio: number;

  labelsLine: any[] = [];

  dataLine: ChartFormat = {
    labels: [],
    data: []
  };

  percentualeErrori: number;

  dataBar: ChartFormat = {
    labels: [],
    data: []
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  calendarEmit(event: Date[]) {
    let datesString = [event[0].toISOString(), event[1].toISOString()];
    console.log("datesString", datesString)
    this.loadApi(datesString);
  }



  loadApi(dates: string[]) {
    const observer: Observer<any> = {
      next: data => {
        console.log(' [next]:', data);
        this.loadChartLine();
        this.loadChartPie();
        this.loadChartBar();
      },
      error: error => console.warn(' [error]:', error),
      complete: () => console.info(' [complete]')
    };

    let retrive$ = this.apiService.getRetrive(dates).pipe(
      tap(res => {
        this.response = res;
        console.log("tap")
      }),
      map(res => res.values),
      tap(res => {
        this.chiamateTotali = res.reduce(
          (accumulator, currentValue) => accumulator + currentValue.total_requests, 0
        );
        this.erroriTotali = res.reduce(
          (accumulator, currentValue) => accumulator + currentValue.total_errors, 0
        );
        this.tempoRispostaMedio = res.reduce(
          (accumulator, currentValue) => accumulator + currentValue.total_response_time_ms, 0
        ) / this.chiamateTotali;
      })

    );
    retrive$.subscribe(observer);
  }


  loadChartLine() {
    this.dataLine = {
      labels: [],
      data: []
    };
    let dataUltimaLine = this.response.values.slice(this.response.values.length - 10);
    dataUltimaLine.forEach(element => {
      this.dataLine.labels.push(new Date(element.creation_datetime).toUTCString());
      this.dataLine.data.push(element.total_requests);
    });
  }

  loadChartPie() {
    this.percentualeErrori = (this.erroriTotali * 100) / this.chiamateTotali;
  }


  loadChartBar() {
    let labelsBar = [1, 2, 3, 4, 5, 6];

    this.dataBar = {
      labels: [],
      data: []
    };

    labelsBar.forEach(element => {
      let total = this.response.values.filter(x => x.key === element).length;
      this.dataBar.labels.push(element);
      this.dataBar.data.push(total);

    });

  }


}


