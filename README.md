socket-woes
===========

# Set up

`npm install`

# Engine.IO

`node engineio.app.js`

emulate a mobile device (or use a real one) and browse to:

`http://localhost:3000/`

# Primus

`node primus.app.js`

emulate a mobile device (or use a real one) and browse to:

`http://localhost:3000/`

# NOTES

Running plain engine.io, the initial connection is long polling, but then is upgraded to websockets.

Running primus with engine.io, the initial connection is long polling, but it is not upgraded: it remains long polling.