**STEPS**

1. Install all npms
2. add .gitignore to node_modules
3. copy paste from web-template-main
4. run with either:
npm run build
npm run start
npm run watch
npm run server

npm init -y
npm install webpack webpack-cli --save-dev
npm install --save lodash
npm install --save-dev style-loader css-loader
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save-dev express webpack-dev-middleware



info:
1. gets you package.json
2. installs webpack. gives you node modules
    Add a .gitignore for this
3. Installs lodash
4. CSS Loader
5. plugin. no need to make html
6. for live update. not really working. just use npm run watch
7. make it run on http://localhost:3000