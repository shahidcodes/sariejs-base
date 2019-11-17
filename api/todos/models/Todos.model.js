const { Schema } = require('sariejs').mongoose

module.exports = {
  dbName: "tempest",
  collectionName: "todos",
  schema: new Schema({
    text: String,
    status: Boolean
  })
}