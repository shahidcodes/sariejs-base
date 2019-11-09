const Sarie = require("sariejs")
const morgan = require("morgan")

Sarie
  .onBeforeInit(() => {
    console.log('initializing app')
  })
  .onBeforeRoutesRegistered(app => {
    app.use(morgan('dev'))
  })
  .onAfterRoutesRegistered(app => { })
  .onAfterInit(app => { })
  .start().then(console.log)