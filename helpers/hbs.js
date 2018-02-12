module.exports = {
  total: function(clients) {
    clients.forEach(client => {
      console.log(client.services)
    })
  }
}