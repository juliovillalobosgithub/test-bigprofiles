import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.css']
})
export class InputCalendarComponent implements OnInit {

  @Output()
  selectedChange: EventEmitter<Date[]> = new EventEmitter<Date[]>();

  rangeDates: Date[] = [new Date('2021-07-20T09:01:00'), new Date('2021-07-21T03:21:00')];

  min = new Date('2021-07-20T09:01:00');
  max = new Date('2021-07-21T03:21:00');

  ngOnInit(): void {
    this.selectedChange.emit(this.rangeDates);
  }

  onClose(event: Event) { 
    this.selectedChange.emit(this.rangeDates);
  }
}
