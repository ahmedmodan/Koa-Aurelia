# Personal Site at [ahmedmodan.com](http://ahmedmodan.com)

This is the repo for my personal website. I know it is a little overengineered for what it is.
It want to serve as a proof of concept as well as a functioning website. The front end is built atop
the Aurelia js framework and the backend is built atop Koajs. The blogging service is provided by
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
  >**Note:** Browsing the app at while running `gulp watch` will not run the node server. If you want to run the node server follow steps 7 and 8.


## Bundling
Bundling is performed by [Aurelia Bundler](http://github.com/aurelia/bundler). A gulp task is already configured for that. Use the following command to bundle the app:

  ```shell
    gulp bundle
  ```

You can also unbundle using the command bellow:

  ```shell
  gulp unbundle
  ```

