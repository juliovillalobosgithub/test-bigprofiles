import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-chart-line',
    templateUrl: './chart-line.component.html',
    styleUrls: ['./chart-line.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartLineComponent implements OnInit {

    @Input()
    data: any;

    lineOptions = {
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
    };;

    constructor() { }

    ngOnInit() {
        console.log("ngOnInit ChartLineComponent ", this.data)
    }
}
