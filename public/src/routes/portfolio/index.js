import navPrefState from '../../services/navPrefState';
import { inject } from 'aurelia-framework';

@inject(navPrefState)
export default class Portfolio {
  constructor(navState) {
    this.navState = navState;
  }
  configureRouter(config, router) {
    config.map([
      {
        route: '',
        redirect: 'code'
      },
      {
        route: 'code',
        name: 'code',
        moduleId: './code/index',
        nav: true,
        title: 'Code'
      },
      {
        route: 'photography',
        name: 'photography',
        moduleId: './photography/index',
        nav: true,
        title: 'Photography'
      }
    ]);
    this.router = router;
  }

  activate(params, routeConfig, navigationInstruction) {
    if (this.navState.portfolio === 'CODE') {
      this.router.navigate('portfolio/code');
    } else {
      this.router.navigate('portfolio/photography');
    }
  }
}
