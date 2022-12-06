require('dotenv').config();

module.exports = {
  HOST: process.env.POSTGRESQL_SERVER,
  USER: process.env.POSTGRESQL_USER,
  PASSWORD: process.env.POSTGRESQL_PASSWORD,
  DB: "journal",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
