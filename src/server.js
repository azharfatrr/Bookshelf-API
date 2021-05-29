/**
 * Main server file
 */

/** Required module */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

/** Initializing server */
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  /** Routing server */
  server.route(routes);

  /** Starting server */
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};


init();
