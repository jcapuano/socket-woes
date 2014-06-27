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

Running plain engine.io, using mobile emulation, the initial connection is long polling, but then is upgraded to websockets.
Running plain engine.io, using a mobile device, the initial connection is websockets.

Running primus with engine.io, using mobile emulation, the initial connection is long polling, but it is not upgraded: it remains long polling.
Running primus with engine.io, using a mobile device, the initial connection is long polling, but it appears to upgrade to websockets.

Running primus with sockjs, using mobile emulation, the initial connection is xhr streaming, but it is not upgraded: it remains xhr streaming.
Running primus with sockjs, using a mobile device, the initial connection is websockets.