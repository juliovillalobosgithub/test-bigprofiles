import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getColor } from '../../../../shared/helpers/functions';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit {
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
    console.log("ngOnInit BoxComponent");
  }

}
