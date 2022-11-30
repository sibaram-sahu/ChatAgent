const io = require('./ioserver')

function join(req, res) {
  const username = req.query.username;
  io.getIO().emit('join-chat', username); 
  console.log(`${JSON.stringify(username)} join request initiated.`)
  res.send({
    status: 200,
    message: 'join request' + username
  })
}


module.exports = {
  join
}