import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
require('dotenv').config();

import './mongodb/connect';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const startServer = async () => {
  const { SERVER_HOST, SERVER_PORT, GRAPHQL_SERVER_PATH } = process.env;
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app, path: `${GRAPHQL_SERVER_PATH}` });
  await new Promise((resolve) =>
    httpServer.listen({ port: SERVER_PORT }, resolve),
  );
  console.log(
    `🚀 Server ready at ${SERVER_HOST}:${SERVER_PORT}${server.graphqlPath}`,
  );
};

startServer();
