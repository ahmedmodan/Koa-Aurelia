export default class Portfolio {
  configureRouter(config, router) {
    config.map([
      {
        route: ['', 'code'],
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
}
