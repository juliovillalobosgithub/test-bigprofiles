import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-logs',
  templateUrl: './table-logs.component.html',
  styleUrls: ['./table-logs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableLogsComponent {

  @Input()
  data: any[];

  constructor() { }

  ngOnInit() {
  }

}
