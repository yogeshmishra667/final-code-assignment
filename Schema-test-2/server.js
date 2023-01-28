const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
const app = require('./app');

mongoose
  .connect('mongodb+srv://yogesh:yogesh@cluster0.ke96jq2.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB connected successfully 🔥🎉');
  });

//define port
const port = process.env.PORT || 3000;
//for start the server of express
const server = app.listen(port, () => {
  console.log(`the server start on port ${port} 🤡`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
