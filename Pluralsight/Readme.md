**************************************************************************************************
React: Getting Started (By Samer Buna)
**************************************************************************************************
run react app:
  open main html with browser cmd:
   start chrome path/page.html

current item key : is usefull in immediat loop element

React : javascript UI library
Babel: compile React JSX to "React API" 
JSX: compile react syntaxe to "js html" 

to install dev http server:
1  npm install http-server --save-dev
2  npm install concurrently --save-dev

html: declarative for static data
react: declarative for dynamic data

js learning sites: 
https://jscomplete.com/react-cfp, 
https://react.org
https://jscomplete.com/playground or https://codepen.io/
https://github.com/MicheleBertoli/css-in-js

react component: 
    receive inputs and return UI (output). It can manage private state
    reactive update
    virtual view in memory: generate HTML using js (not HTML template language), tree reconciliation

Two type of react components: 
 Fuction:
    function component:
      const functionComponent = ()=>{
        return (
          <>
             UI (html elements)
          </>
        ); 
      }
 Class:
  class component 
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

//Use ReactDOM to render compoment
ReactDOM.render(
  return (
    </component>,
    target
  );
)

***************************************
prepare dev environnement
***************************************
  create project folder: 
  npm init -y
  npm install babel-cli@6 babel-preset-react-app@3
  create source folder: name 'src'
  run: npx babel --watch src --out-dir . --presets react-app/prod 

//in package.json
package.json/scripts

    "start": "concurrently \"http-server -a localhost -p 5000\" "
    or
    "start": "npm run open",
    "open": "concurrently \"http-server -a localhost -p 5000\""

run package.json/script: 
  start: "npm run start", "npm start"

***************************
Dev environment settings
***************************
Multiple tools
  APIs
  Configurations
  Releases

Environments: 
  dev & prod
  test

Different renderers:
  DOM: document object model
  SSR: server side render

create-react-app: (pupular tool to create react app)
  "npm i -g create-react-app && create-react-app cra-test" (or "npx create-react-app cra-test") 
  move in "cra-est" folder
  "npm run eject" (display config files in project root folder "cra-test")
  run app: mpm start (to start application) 

create app from scratch (have advise project architecture):
  https://jscomplete.com/reactful:
    install guide, 
      full stack install: 
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

******************************
* Learn more
*******************************
https://jscomplete.com/react-beyond-basics
https://jscomplete.com/why-graphql
https://jscomplete.com/closures

*****************************
* component state
*****************************
app logic to change state
UI logic to describe state

