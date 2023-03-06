import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { map, tap, Observer, Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Retrive } from '../../../shared/interfaces/retrive.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], 
})
export class DashboardComponent implements OnInit, OnDestroy {
  response: Retrive;
  retriveSubs: Subscription;
  observer: Observer<any> = {
    next: data => {
      console.log(' [next]:', data);
      this.loadChartLine();
      this.loadChartPie();
      this.loadChartBar();
    },
    error: error => console.warn(' [error]:', error),
    complete: () => console.info(' [complete]')
  };

  chiamateTotali: number;
  erroriTotali: number;
  tempoRispostaMedio: number;

  dataLine: any;
  dataPie: any;
  dataBar: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  calendarEmit(event: Date[]) {
    let datesString = [event[0].toISOString(), event[1].toISOString()];
    console.log("datesString", datesString)
    this.loadApi(datesString);
  }

  loadApi(dates: string[]) {

    let retriveObs$ = this.apiService.getRetrive(dates).pipe(
      tap(res => {
        this.response = res; 
      }),
      map(res => res.values),
      tap(res => {
        this.chiamateTotali = res.reduce(
          (accumulator, currentValue) => accumulator + currentValue.total_requests, 0
        );
        this.erroriTotali = res.reduce(
          (accumulator, currentValue) => accumulator + currentValue.total_errors, 0
        );
        this.tempoRispostaMedio = Math.round(res.reduce(
          (accumulator, currentValue) => accumulator + currentValue.total_response_time_ms, 0
        ) / this.chiamateTotali);
      })

    );

    this.retriveSubs = retriveObs$.subscribe(this.observer);

  }

  loadChartLine() {
    let labels: any[] = [];
    let data: any[] = [];
    let dataUltimaLine = this.response.values.slice(this.response.values.length - 10);
    dataUltimaLine.forEach(element => {
      labels.push(new Date(element.creation_datetime).toUTCString());
      data.push(element.total_requests);
    });

    this.dataLine = {
      labels: labels,
      datasets: [
        {
          label: 'Ultime 10 chiamate [Values]',
          data: data,
          fill: false,
          backgroundColor: '#0c81eb',
          borderColor: '#4c81eb',
          tension: .4
        },
      ]
    };
  }

  loadChartPie() {
    let percent = (this.erroriTotali * 100) / this.chiamateTotali;
    let percentTemp = Math.round(percent);

    this.dataPie = {
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

  }

  loadChartBar() {
    let labels = [1, 2, 3, 4, 5, 6];
    let data: any[] = [];

    labels.forEach(element => {
      let total = this.response.values.filter(x => x.key === element).length;
      data.push(total);
    });

    this.dataBar = {
      labels: labels,
      datasets: [
        {
          label: 'Distribuzione Valori',
          borderColor: '#0c81eb',
          backgroundColor: '#4c81eb',
          data: data
        },

      ]
    };
  }

  ngOnDestroy(): void {
    this.retriveSubs.unsubscribe();
  }

}


