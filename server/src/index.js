import express from 'express';
import http from 'http';
require('dotenv').config();

const startServer = async () => {
  const { SERVER_HOST, SERVER_PORT } = process.env;
  const app = express();
  const httpServer = http.createServer(app);

  await new Promise((resolve) =>
    httpServer.listen({ port: SERVER_PORT }, resolve),
  );
  console.log(`🚀 Server ready at ${SERVER_HOST}:${SERVER_PORT}`);
};

startServer();
