import { Component, OnInit, Input } from '@angular/core';
import { IFormAnswer } from '../form-answer';

@Component({
  selector: 'dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() headers: string[];
  @Input() answers: IFormAnswer[];
  constructor() { }

  ngOnInit() {
    
  }

}
