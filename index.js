const tempest = require("tempest")
const morgan = require("morgan")

tempest
  .onBeforeInit(() => {
    tempest._test = 1;
  })
  .onBeforeRoutesRegistered(app => {
    app.use(morgan('dev'))
  })
  .onAfterRoutesRegistered(app => {

  })
  .onAfterInit(app => {
    console.log(tempest._test)
  })
  .start().then(console.log)