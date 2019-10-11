module.exports = {
  databases: [{
    host: "localhost",
    port: 27017,
    user: "tempest",
    pwd: "tempest",
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    name: "tempest"
  }]
}