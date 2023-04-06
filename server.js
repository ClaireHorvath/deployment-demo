const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '822d0293a6b94d29b32dcaf3c57a96e5',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.listen(4000,
   () => console.log(`server running on 4000`)
)