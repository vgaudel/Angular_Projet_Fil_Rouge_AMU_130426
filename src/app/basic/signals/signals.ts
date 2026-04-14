import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {

  count1 : number = 10;
  count2 : WritableSignal<number> = signal(10);
  constructor() {
    setTimeout(() => (this.count1 = 30), 3000);
    setTimeout(() => (this.count2.set(30)), 3000);
  }
}
