import { inject } from 'aurelia-framework';
import nameState from '../../services/nameState';

@inject(nameState)
export default class ShowName {
  constructor(isShown) {
    this.shown = isShown.shown;
  }

  deactivate() {
    nameState.shown = this.shown;
  }

  message = 'Hello Ahmed';

  toggleShown = () => {
    this.shown = !this.shown;
  }
}
