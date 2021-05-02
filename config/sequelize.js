require('dotenv').load();
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  [ENV]: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    define: {
      timestamps: false
    },
    query: {
      raw: true
    },
    logging: null
  }
};
