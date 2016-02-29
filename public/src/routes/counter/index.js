import { inject } from 'aurelia-framework';
import counterState from '../../services/counterState';

@inject(counterState)
export default class Counter {
  constructor(count) {
    this.count = count.count;
  }

  deactivate() {
    counterState.count = this.count;
  }

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }

}
