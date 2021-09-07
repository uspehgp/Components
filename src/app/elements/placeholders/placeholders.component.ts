import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-placeholders',
  templateUrl: './placeholders.component.html',
  styleUrls: ['./placeholders.component.css']
})
export class PlaceholdersComponent implements OnInit {

  @Input() header = true;
  @Input() lines = 5;

  constructor() {
  }

  ngOnInit(): void {
  }

}
