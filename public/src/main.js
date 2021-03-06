export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-html-import-template-loader')
    .globalResources('bootstrap/css/bootstrap.css');

  // When not component specified in setRoot, root component
  // is set to the html tag  with the aurelia-app attribute
  // otherwise we can set to
  aurelia.start().then((a) => a.setRoot('app', document.body));
}
