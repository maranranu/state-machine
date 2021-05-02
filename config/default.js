module.exports = {
  port: 8081,
  database: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    define: {
      timestamps: false
    },
    benchmark: true,
    logging: null
  }
}
