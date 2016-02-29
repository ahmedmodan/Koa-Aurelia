export default class App {
  configureRouter(config, router) {
    config.title = 'Ahmed Modan';
    config.options.pushState = true;
    config.options.hashChange = false;
    config.map([
      {
        route: ['', 'landing'],
        name: 'landing',
        moduleId: './routes/landing/index',
        nav: false,
        title: 'landing'
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
      }
    ]);
    this.router = router;
  }

}
