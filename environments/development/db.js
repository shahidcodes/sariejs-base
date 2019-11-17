module.exports = {
  defaultDatabase: 'sariejs',
  databases: [{
    host: "localhost",
    port: 27017,
    user: "sariejs",
    pwd: "sariejs",
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    name: "sariejs"
  }]
}