https://sequelize.org/

## What
- express
- sequelize https://github.com/sequelize/sequelize
- swagger https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do

## Run (bash)

    $ npm install
    $ DEBUG=todojs:* npm start
    $ bash ./test.sh

## DB Config

(SQLite for now)

## Swagger

    swagger-jsdoc  -d swaggerDefs.js app.js routes/*.js
