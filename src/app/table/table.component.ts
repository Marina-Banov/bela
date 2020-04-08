import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() orderedUsernames: any[];
  @Input() turn: string;

  constructor() { }

  ngOnInit() {
  }

}
