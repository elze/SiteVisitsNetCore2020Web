import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public title = 'Counter';

  constructor(private titleService: Title) {
    this.titleService.setTitle("Counter");
  }


  public incrementCounter() {
    this.currentCount++;
  }
}
