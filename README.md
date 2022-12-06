# Node.js PostgreSQL Express Rest APIs

The following table shows overview of the Rest APIs that will be exported:

- GET     `api/journals`              get all journals
- GET     `api/journals/:id`         get Tutorial by id
- POST    `api/journals`             add new Tutorial
- PUT     `api/journals/:id`         update Tutorial by id
- DELETE  `api/journals/:id`         remove Tutorial by id
- DELETE  `api/journals`             remove all journals
- GET     `api/journals/published`   find all published journals
- GET     `api/journals?title=[kw]`  find all journals which title contains 'kw'

### Test the APIs

Run our Node.js application with command: `node server.js`.

## Project setup

```
npm install
```

### Run

```
node server.js
```