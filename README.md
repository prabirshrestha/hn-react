# Hacker News Client built using ReactJS

This is a port of the Hacker News Client writter in AngularJS. [https://coderwall.com/p/0pfmvq](https://coderwall.com/p/0pfmvq).
Source code of the angular port can be found at [https://github.com/codealpha/hn-angular](https://github.com/codealpha/hn-angular).

## What this sample isn't

* Not meant to be compared with the angular js port
* show best practices

## What this sample is

* shows how to use the streaming build system - [gulp.js](http://gulpjs.com/)
* use [browserify](http://browserify.org/) - browser-side require() the node.js way
* use reactify to help tranform jsx syntax to js
* use gulp-concat
* use-gulp-imagemin
* shows how to split different components in different file
* also shows how to define multiple components in the same file

## Running the sample

```bash
npm install -g gulp
npm install
gulp dev
```

To build only use `gulp build`.

## Running tests

```bash
npm install -g jest-cli
npm test
```
