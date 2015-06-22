# Misc-JS

Miscellanous useful JavaScripts

## PersistentWS.js

Provides a construcotr for WebSockets that automatically attempt to reconnect after being disconnected. Reconnection times start at ~5s for the first attempt, double after each failed attempt, and are randomized by +/- 10% to prevent clients from reconnecting at the exact same time after a server event.

To use, add to your webserver root and include this HTML/JS:

~~~
<script type="text/javascript" src="/PersistentWS.js"></script>

var pws = new PersistentWS({url: 'wss://your.websocket/server'});

pws.addEventListener('message', function(message) {
  console.log('Received: ' + message);
});
~~~

.addEventListener() and .removeEventListener should be called on the PersistentWS object and not on the raw socket, to allow events to be reattached properly after reconnections.
