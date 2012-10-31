var arDrone = require('ar-drone')
var client  = arDrone.createClient()

client.takeoff()
client
  .after(5000, function() {
    client.up(0.5)
    client.after(300, function() {
      client.animate('flipLeft', 15)
      client.after(300, function() {
        client.land()
      })
    })
  })

