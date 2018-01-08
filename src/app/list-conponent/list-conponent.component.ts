import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-conponent',
  templateUrl: './list-conponent.component.html',
  styleUrls: ['./list-conponent.component.css']
})
export class ListConponentComponent implements OnInit {

  items = [
    'item 1',
    'item 2',
    'item 3'
    ];
  constructor() { }

  ngOnInit() {
  }

}
