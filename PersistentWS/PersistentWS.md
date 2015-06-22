# PersistentWS.js

This script provides a persistent WebSocket that attempts to reconnect after disconnections

Dependencies: None

---

## PersistentWS

Inherits: None

This is a WebSocket that attempts to reconnect after disconnections

Reconnection times start at ~5s, double after each failed attempt, and are randomized +/- 10%

```
var persistentConnection = new PersistentWS({url: wss://foo.bar/});

persistentConnection.addEventListener('message', function(message) {
  console.log('Received: ' + message);
});
```

#### Options

`Boolean` **silent** 

`String` **url** 

#### Properties

`[[String,` **Function,** Boolean]] _listeners -- For internal use. Array of .addEventListener arguments

`Number` **attempts** -- Retry attempt # since last disconnect

`Number` **initialRetryTime** -- Delay for first retry attempt, in milliseconds. Always an integer >= 100

`Boolean` **silent** 

`WebSocket` **socket** -- The actual WebSocket. Events registered directly to the raw socket will be lost after reconnections

`String` **url** 

#### Methods

`undefined` **_connect**`()` -- For internal use

`Number` proto **_getListenerIndex**`(String type, Function listener[, Boolean useCapture])` -- For internal use. Returns index of a listener in ._listeners

`undefined` proto **addEventListener**`(String type, Function listener[, Boolean useCapture])` -- Registers event listener on .socket. Event listener will be reregistered after reconnections

`Boolean` proto **dispatchEvent**`(Event event)` -- Same as calling .dispatchEvent() on .socket

`undefined` proto **removeEventListener**`(String type, Function listener[, Boolean useCapture])` -- Removes an event listener from .socket. Event listener will no longer be reregistered after reconnections

