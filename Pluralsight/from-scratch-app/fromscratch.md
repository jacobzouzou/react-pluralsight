create app folder
cd folder
npm init
npm i express: web server
npm i react react-dom
npm i webpack webpack-cli
npm i babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react
/*developer dependencies*/
npm i -D nodemon
npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
npm i -D jest babel-jest react-test-renderer
create .eslintrc.js in root folder
"
module.exports = { 
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['react-hooks', 'react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    // You can do your customizations here...
    // For example, if you don't want to use the prop-types package,
    // you can turn off that recommended rule with: 'react/prop-types': ['off']
  },
};

"
create babel.config.js in root folder
"
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};

"
//Run app (in separete cmd)
$ npm run dev-server
$ npm run dev-bundle


//you can use 
npx reactfull app-folder