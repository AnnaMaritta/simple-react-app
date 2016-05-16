# simple-react-app

A simple React & React Router app template for learning purposes.

# Usage

__If you are a Windows user, you have to make the modifications explained below to run these commands. Also, use Git Bash (installed with Git). These do not work directly in `cmd.exe`. Tested on Windows 10.__

`npm install` to install dependencies.

`npm run watch` to start watching for changes in scripts, styles and static assets.

`npm run build` to create a build without source maps.

`npm start` to start the development server.

# Tools

* Browserify and Watchify with Babelify
* PostCSS
* LESS
* Autoprefixer

# Operating system limitations

The included npm scripts rely on tools that are available only in Unix / OS X systems.

If you run this in Windows, you will probably get errors related to missing commands because npm runs scripts in `cmd.exe`. 

In Windows, you need to change a couple of things in `package.json` scripts' section:
- change all slashes `/` to escaped backslashes `\\` (first char escapes the second char)
- change both `cp` and `cp -r` commands to `copy`
- change `NODE_ENV=production` to `set NODE_ENV=production`
- change all single quotes `'` to escaped double quotes `\"`

Here's an example `package.json` with the mentioned changes: https://gist.github.com/tukkajukka/515dd3e07f6d97a2418db8c2c43a3075

