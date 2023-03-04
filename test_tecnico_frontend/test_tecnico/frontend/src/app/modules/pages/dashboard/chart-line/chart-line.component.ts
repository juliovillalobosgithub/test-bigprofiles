import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartFormat } from 'src/app/shared/interfaces/chartFormat';

@Component({
    selector: 'app-chart-line',
    templateUrl: './chart-line.component.html',
    styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit, OnChanges {

    @Input()
    data: ChartFormat;

    lineData: any;
    lineOptions: any;

    constructor() { }

    ngOnInit() {
        this.initCharts();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.initCharts();
    }

    initCharts() {
        this.lineData = {
            labels: this.data.labels,
            datasets: [
                {
                    label: 'Ultime 10 chiamate [Values]',
                    data: this.data.data,
                    fill: false,
                    backgroundColor: '#0c81eb',
                    borderColor: '#4c81eb',
                    tension: .4
                },
            ]
        };

        this.lineOptions = {
            plugins: {
                title: {
                    display: true,
                    text: 'Chiamate nel tempo',
                    color: '#ebedef'
                },
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {

                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    },
                    title: {
                        display: true,
                        text: 'Date',
                        color: '#ebedef',
                    }
                },
                y: {
                    label: 'Percent',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#ebedef',
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
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
