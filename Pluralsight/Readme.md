# React
## Getting Started (By Samer Buna)
### Run react app  
Open main html with browser cmd

    > start chrome page.html

current item key : is usefull in immediat loop element


React : javascript UI library  
Babel: compile React JSX to "React API"  
JSX: compile react syntaxe to "JS HTML" 

## Install dev http server

    1  npm install http-server --save-dev
    2  npm install concurrently --save-dev

HTML: declarative for static data  
React: declarative for dynamic data

##  JS learning sites: 
https://jscomplete.com/react-cfp,  
https://react.org,  
https://jscomplete.com/playground or https://codepen.io/
https://github.com/MicheleBertoli/css-in-js

## React component
Receive inputs and returns UI (output) (can manage private state)  
Reactive update  
virtual view in memory: generate HTML using js (not HTML template language), tree reconciliation

### Two types of react component

 #### Function component

      const functionComponent = ()=>{
        return (
          <>
            //return a fragment
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

Use ReactDOM (global variable) to render compoment when using cdn to import react and react-dom. 

Example:

    ReactDOM.render(
      return (
        </component>,
        target
      );
    )

## prepare dev environnement

    Create project folder: 
      npm init -y
      npm install babel-cli@6 babel-preset-react-app@3
      create source folder: name 'src'
      run: npx babel --watch src --out-dir . --presets react-app/prod 

### Edit `package.json` scripts section

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
### create-react-app: (pupular tool to create react app)

    "npm i -g create-react-app && create-react-app appName" [or "npx create-react-app appName"] 
    move in "appName" folder
    "npm run eject": display config files in project root folder: "appName"
    run app: mpm start

### create app from scratch (have advise project architecture):
  https://jscomplete.com/reactful

    Install guide, 
      Full stack install: 
        prod: init, express, react-Dom, webpack, webpack-cli,babel
        dev: nodemon, eslint, babel-eslint, eslint-plugin-react, jest, babel-jest, react-jest-renderer

      Config after install:
        .eslintrc.js
        bable.config.js
        webpack.config.js
        package.json/scripts:
          dev-server: "nodemon --exec babel-node scr/server/server.js --ignore dist/"
          dev-bundle: "webpack -wd"

    run app (in separate terminals):
      npm run dev-server
      npm run dev-bundle (package app in dist/main.js)

    Create from "reactful":
      create: "npx reactful reactful-star-match"
      replace App.js code with start match code
      cd reactful-star-match
      run app: npm start

## Learn more
https://jscomplete.com/react-beyond-basics  
https://jscomplete.com/why-graphql  
https://jscomplete.com/closures

## Component state
app logic to change state
UI logic to describe state

