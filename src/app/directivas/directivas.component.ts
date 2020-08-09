import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {


  isValid: boolean = true;
  personas = [
    'gus',
    'lau',
    'mart'
  ];

  constructor() {
  }

  getColor() {
    return 'gold';
  }

  ngOnInit() {
  }

}
