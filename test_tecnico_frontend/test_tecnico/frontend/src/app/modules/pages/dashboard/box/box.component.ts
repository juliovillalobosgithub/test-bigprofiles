import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { getColor } from '../../../../shared/helpers/functions';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, OnChanges {


  getColor = getColor;

  @Input()
  title: string;

  @Input()
  value: number;

  @Input()
  status: string;

  @Input()
  measure: string;

  ngOnInit(): void {
    this.value = this.validationRound(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value = this.validationRound(this.value);
  }
  validationRound(value: number) {
    return Math.round(value);
  }

}
