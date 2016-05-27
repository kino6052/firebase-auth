# Gulp Automation Script

My boilerplate for creating new web projects with [Gulp.js](http://gulpjs.com/). Made with help of [gulp-boilerplate](https://github.com/cferdinandi/gulp-boilerplate) of various tutorials around the web.
The current active branch is [gulp-general](https://github.com/kino6052/kickass-automation-script/tree/gulp-general)
* Concatenates and Minifies JS files. [TODO: Lint JS Files]
* Injects the File Paths into .html Documents
* Cleans up file directories.
* [TODO] Includes a `.travis.yml` file for continuous integration with [TravisCI](https://travis-ci.org).

**In This Documentation**

1. [Getting Started](#getting-started)
2. [File Structure](#file-structure)
3. [Options & Settings](#options-and-settings)
4. [Continuous Integration](#continuous-integration)
5. [License](#license)

## Getting Started

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	* `gulp` manually compiles files and runs unit tests.
	* `gulp watch` automatically compiles files, runs unit tests, and applies changes using [LiveReload](http://livereload.com/).
	* `gulp test` compiles files and runs unit tests.

## File Structure

Add your files to the appropriate `src` subdirectories. Gulp will process and and compile them into `dist`.

* Content in subdirectories under the `js` folder will be concatenated. Files directly under `js` will compile individually.
```
kickass-automation-script/
|—— dist/
|__ scripts/
|   |__ init.js
|   |__ parameters.js
|—— src/
|   |—— js/
|   |__ index.html/
|—— .travis.yml
|—— gulfile.js
|—— package.json
|—— README.md
```

## Options and Settingsbo

### Updating Project Details
Open up `package.json` to change the name, version, URL and other data about the project.

## Continuous Integration

### Travis CI

[TODO: Add Travis Settings]

## License

[TODO: Add License]
