'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

var server = new Hapi.Server();
server.connection({port:process.env.PORT || 3000});

server.register(require('vision'), (err) => {

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates',
        layout: 'default',
        layoutPath: 'templates/layout',
        partialsPath: 'templates/partials',
        helpersPath: 'templates/helpers'
    });
});


server.route(require('./routes/routes.js').routes);
server.register(Inert, (err) => {
    if (err) {
        throw err;
    }

    server.route({
        path: '/public/{path*}',
        method: 'GET',
        handler: {
            directory: {
                path: './app/dest/',
                listing: false,
                index: false
            }
        }
    });
});
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

module.exports = server;