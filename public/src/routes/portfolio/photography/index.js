import navPrefState, { PHOTO } from '../../../services/navPrefState';

export default class Photography {

  deactivate() {
    navPrefState.portfolio = PHOTO;
  }
}
