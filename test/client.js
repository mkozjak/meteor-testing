var createClass = require("asteroid").createClass
var ws = require('ws')

const Asteroid = createClass()

const asteroid = new Asteroid({
  endpoint: "ws://localhost:3000/websocket",
  SocketConstructor: ws
})

asteroid.call("sum", 4, 5)
  .then(result => console.log(result))
  .catch(error => console.log(error))
