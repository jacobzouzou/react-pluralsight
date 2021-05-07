# React
## Getting Started (By Samer Buna)
### Run react app  
Open main html with browser cmd

    start chrome page.html

current item key : is usefull in immediat loop element


- React : JavaScript UI library.
- Babel: compile React JSX (JavaScript and XML) to React API. 
- JSX: compile react syntaxe to JS HTML. 

## Install dev http server (node web server : express)

    npm install http-server --save-dev

- HTML: declarative for static data.
- React: declarative for dynamic data.

##  JS learning sites 
https://jscomplete.com/react-cfp  
https://react.org  
https://jscomplete.com/playground (or https://codepen.io/)
https://github.com/MicheleBertoli/css-in-js

## React component
- Receive inputs and returns UI (output): can manage private state.  
- Reactive update.
- Virtual view in memory: generate HTML using JS (not HTML template language), tree reconciliation.

### Two types of react component

 #### Function component

      const functionComponent = ()=>{
        return (
          <>
            //return a fragment or single root element
             UI (html elements)
          </>
        ); 
      }

#### Class component 

    export class classCompo {
      //state
      //other components

      //constructor

      //render function
      render(){
        return (
            <div>
              UI
            <div/>       
        )
      }
    }

Use ```ReactDOM``` (global variable) to render compoment when using cdn to import react and react-dom. 

Example:

    ReactDOM.render(
      return (
        </component>,
        target
      );
    )

## prepare dev environment
### Create project folder

      //from project folder execute
      npm init -y
      npm install babel-cli@6 babel-preset-react-app@3
      create source folder: name 'src'
      run: npx babel --watch src --out-dir . --presets react-app/prod 

### Edit ```package.json``` scripts section

    {
      ...
      "start": "http-server -a localhost -p 5000"
      ...
    }
    or
    {
      ...
      "start": "npm run open",
      "open": "http-server -a localhost -p 5000"
      ...
    }

### Run app

    start: "npm run start", "npm start"

### Dev environment settings
Multiple tools

    APIs
    Configurations
    Releases

Environments

    dev & prod
    test

## Different renderers
  DOM: document object model  
  SSR: server side render

## Create application
### Create-react-app tool 

    //Create Reat app 
    npm i -g create-react-app && create-react-app appName 
    //or 
    npx create-react-app appName 
    
    //move in "appName" folder
    //display config files
    npm run eject

    //run app
    mpm start

### Create app from scratch
  See https://jscomplete.com/reactful

    Install guide 
      Full stack install: 
        prod: init, express, react-Dom, webpack, webpack-cli,babel
        dev: nodemon, eslint, babel-eslint, eslint-plugin-react, jest, babel-jest, react-jest-renderer

      Config after install:
        .eslintrc.js
        babel.config.js
        webpack.config.js
        package.json/scripts:
          dev-server: "nodemon --exec babel-node scr/server/server.js --ignore dist/"
          dev-bundle: "webpack -wd"

    run app :
      npm run dev-server
      npm run dev-bundle (package app in dist/main.js)

Create app from "reactful"
1. Create app
    
    npx reactful ```reactful-star-match```
2. Replace ```App.js``` code with start match code
3. Move in project folder: ```reactful-star-match```
4. run app

    npm start

## Learn more
https://jscomplete.com/react-beyond-basics  
https://jscomplete.com/why-graphql  
https://jscomplete.com/closures

## Component state
- Use app logic to change state.
- Use UI logic to describe state

