import { customElement, bindable } from 'aurelia-framework';

@customElement('message-display')
export default class MessageDisplay {
  @bindable message;

  get displayedMessage() {
    return this.message;
  }
}

