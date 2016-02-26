# Personal Site at [ahmedmodan.com](http://ahmedmodan.com)

This is the repo for my personal website. I know it is a little overengineered for what it is. I wanted to
try a bunch of technologies and I also wanted to create a persoanl website so this is the result of those two desires.
The front end is built atop the Aurelia js framework and the backend is built atop Koajs. The blogging service is provided by
the open source bloggin platform Ghost.

## Get Started

To run the application follow these steps:

1. Ensure that the latest stable version of [NodeJS](http://nodejs.org/) is installed.
This is necessary to run the application.

2. Once you are in the project folder execute the following command:
  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

4. Ensure that [jspm](http://jspm.io/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.

5. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.

6. Before you run the app browse to the `server.js` file in the root directory and uncomment lines: `5,6,28 AND 29`;
This will serve up the static assets from the node server so you can run the application.

  >**Note:** For deployment it is recommended to comment these lines out and use NGINX to serve up the static files to avoid puttin unneccesary load on the node server.

8.

7. To run the app execute the following commands in order (if you would not like to run the server and would like to run the client side code only, skip to step 9):

  ```shell
  gulp build
  npm start
  ```

8. Browse to [http://localhost:3008](http://localhost:3008) to see the app.

9. If you want to make changes to client side code and see the page refresh as you save the changes, you can run the following command:

  ```shell
  gulp watch
  ```
  * Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.
  > **Note:** Browsing the app at while running `gulp watch` will not run the node server. If you want to run the node server follow steps 7 and 8.


## Bundling
Bundling is performed by [Aurelia Bundler](http://github.com/aurelia/bundler). A gulp task is already configured for that. Use the following command to bundle the app:

  ```shell
    gulp bundle
  ```

You can also unbundle using the command bellow:

  ```shell
  gulp unbundle
  ```



---

##Technologies
 The following is a list of technologies this project uses. This project is based off the the Aurelia es2015 skeleton.

 * [Aurelia](http://aurelia.io/)
 * [KoaJS](http://koajs.com/)
 * [Koa-Router](https://github.com/alexmingoia/koa-router)
 * [Koa-static](https://github.com/koajs/static)
 * [Koa-connect-history-api-fallback](https://github.com/davezuko/koa-connect-history-api-fallback)
 * [Babel](https://babeljs.io/)
 * [Gulp](http://gulpjs.com/)
 * [ESLint](http://eslint.org/)
 * [Jasmine](http://jasmine.github.io/)
 * [Karma](https://karma-runner.github.io/0.13/index.html)
 * [JSPM](http://jspm.io/)
 * [Browser-sync](https://www.browsersync.io/)

#### The following technologies are being used in the deployed version of this site:
 * [Ghost](https://ghost.org/)
 * [NGINX](https://www.nginx.com/)
 * [PM2](http://pm2.keymetrics.io/)
 * [NVM](https://github.com/creationix/nvm)

 ---

 ## Resources
 The following is a list of resources I used to build the initial version of this site.
 As I continue to build upon this and use more resources to help me learn, I will keep this updated.

* [Aurelia Docs](http://aurelia.io/docs.html#/aurelia/framework/latest/doc/article/what-is-aurelia)
  * Used for both initial client side set up and for the Skeleton provided. Much of the first part of
  the readme for the app install and getting your app running is lifted straight from the readme for the aurelia skeleton.
* [Aurelia App Structure](http://ilikekillnerds.com/2015/10/how-to-structure-an-aurelia-application/)
* [Dependency Injection](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.kbomj32py)
  * To help me understand what decorators do and how dependency injection works
  * **See Also:** [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
* [KoaJs Docs](http://koajs.com/)
  * [ES6 Generators](https://davidwalsh.name/es6-generators)
  * [Co](https://www.npmjs.com/package/co)
    * To help me understand what was being baked into Koa's middleware service to help it move through each generator function.
* [Koa-Router](https://www.npmjs.com/package/koa-router)

### The Following Resources were used to help me deploy this site alongside Ghost on Digital Ocean

* [Digital Ocean - Node and Ubuntu Tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04)
* [SSH set up](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04)
* [NGINX set up for pushState URLs](http://stackoverflow.com/questions/9184959/rewriting-nginx-for-pushstate-urls)
* [Setting up a Host Name for Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
* [Managing Node with PM2 and NGINX](https://doesnotscale.com/deploying-node-js-with-pm2-and-nginx/)
* [Managing different Versions of Node with NVM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps)
* [Running Node with different versions with PM2 and NVM](https://github.com/Unitech/PM2/issues/1034)
* [Installing Ghost on Ubuntu](https://www.howtoinstallghost.com/how-to-install-ghost-on-ubuntu-server-12-04/)
  * TODO: add link to blog post about problems with running ghost and another server with two different versions of node
* [Ghost with PM2](https://www.allaboutghost.com/keep-ghost-running-with-pm2/)
