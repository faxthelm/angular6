import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.css']
})
export class TableOptionsComponent implements OnInit {
  @Input() row: number;
  constructor() { }

  ngOnInit() {
  }

  onEdit(){

  }
  
  onRemove(){

  }

}
