import navPrefState, { CODE } from '../../../services/navPrefState';

export default class Code {

  deactivate() {
    navPrefState.portfolio = CODE;
  }
}
