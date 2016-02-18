export default class App {
  configureRouter(config, router) {
    config.title = 'Ahmed Modan';
    config.map([
      {
        route: ['', 'counter'],
        name: 'counter',
        moduleId: './pages/counter/index',
        nav: true,
        title: 'Counter'
      },
      {
        route: 'show-name',
        name: 'name',
        moduleId: './pages/showname/index',
        nav: true,
        title: 'Name'
      }
    ]);
    this.router = router;
  }

}
