# X service

Holds user profile data.

## Install

1. Install dependencies: `npm i`
2. Run database migration: `npm run knex migrate:latest`
3. Populate database: `npm run knex seed:run addX`
4. Start service: `npm run watch`

or just `npm i && npm run knex migrate:up && npm run knex seed:run addX && npm run watch`

## Building docker image

`npm run docker-build`
