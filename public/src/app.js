export default class App {
  configureRouter(config, router) {
    config.title = 'Ahmed Modan';
    config.options.pushState = true;
    config.options.hashChange = false;
    config.map([
      {
        route: '',
        name: 'landing',
        moduleId: './routes/landing/index',
        nav: false,
        title: ''
      },
      {
        route: 'counter',
        name: 'counter',
        moduleId: './routes/counter/index',
        nav: true,
        title: 'Counter'
      },
      {
        route: 'show-name',
        name: 'name',
        moduleId: './routes/showname/index',
        nav: true,
        title: 'Name'
      },
      {
        route: 'portfolio',
        name: 'portfolio',
        moduleId: './routes/portfolio/index',
        nav: true,
        title: 'Portfolio'
      }
    ]);
    config.mapUnknownRoutes(instruction => './routes/unknownroute/index');
    this.router = router;
  }

}
