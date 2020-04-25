import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-visits',
  templateUrl: './flat-visits.component.html',
  styleUrls: ['./flat-visits.component.scss']
})
export class FlatVisitsComponent implements OnInit {

  private meow: string;
  constructor() { }

  ngOnInit() {
    this.meow = "Meow Kneow";
  }

}
