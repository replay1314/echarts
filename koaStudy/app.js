const koa = require('koa')
const responseDurationMiddleware = require('./middleware/koaResponseDuration')
const responseHeaderMiddleware = require('./middleware/koaResponseHeader')
const responseDataMiddleware = require('./middleware/koaResponseData')

const app =  new koa()

app.use(responseDurationMiddleware)
app.use(responseHeaderMiddleware)
app.use(responseDataMiddleware)


app.listen(8888)

const webSocketService = require('./service/webSocketService')
webSocketService.listen()