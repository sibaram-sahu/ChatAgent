

const io = require('./src/ioserver');
const PORT = process.env.PORT || 3000;
const app = io.app;

const appRouter = require('./src/router')

app.use('/v1', appRouter);

io.ioServer().on('connection', (socket) => {
  console.log(`${socket.id} is connected.`);

  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

io.server.listen(3000, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});


