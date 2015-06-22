var PersistentWS = (function() { // Module pattern
  /**
   * @description This script provides a persistent WebSocket that attempts to reconnect after disconnections
   */
  
  /**
   * @module PersistentWS
   * @description This is a WebSocket that attempts to reconnect after disconnections
   * @description Reconnection times start at ~5s, double after each failed attempt, and are randomized +/- 10%
   * 
   * @example var persistentConnection = new PersistentWS({url: wss://foo.bar/});
   * @example
   * @example persistentConnection.addEventListener('message', function(message) {
   * @example   console.log('Received: ' + message);
   * @example });
   */
  var PersistentWS = function PersistentWS(options) {
    var self = this;
    
    // @prop String url
    // @option String url
    this.url = String(options.url);
    
    //@prop Boolean silent
    //@option Boolean silent
    this.silent = Boolean(options.silent);
    
    // @prop Number initialRetryTime -- Delay for first retry attempt, in milliseconds. Always an integer >= 100
    this.initialRetryTime = 5000;
    
    // @prop Number attempts -- Retry attempt # since last disconnect
    this.attempts = 0;
    
    // @prop WebSocket socket -- The actual WebSocket. Events registered directly to the raw socket will be lost after reconnections
    this.socket = undefined;
    
    // @prop [[String, Function, Boolean]] _listeners -- For internal use. Array of .addEventListener arguments
    this._listeners = [];
    
    // @method undefined _connect() -- For internal use
    this._connect = function _connect() {
      if(!self.silent) {
        console.log('Opening WebSocket to ' + self.url);
      }
      
      self.socket = new WebSocket(self.url);
      
      // Reset .attempts counter on successful connection
      self.socket.addEventListener('open', function() {
        if(!self.silent) {
          console.log('WebSocket connected to ' + self.url);
        }
        
        self.attempts = 0;
      });
      
      self.socket.addEventListener('close', function() {
        // Retty time falls of exponentially
        var retryTime = self.initialRetryTime*Math.pow(2, self.attempts++);
        
        // Retry time is randomized +/- 10% to prevent clients reconnecting at the exact same time after a server event
        retryTime += Math.floor(Math.random()*retryTime/5 - retryTime/10);
        
        if(!self.silent) {
          console.log('WebSocket disconnected, attempting to reconnect in ' + retryTime + 'ms...');
        }
        
        setTimeout(self._connect, retryTime);
      });
      
      self._listeners.forEach(function(v) {
        self.socket.addEventListener.apply(self.socket, v);
      });
    }
    
    this._connect();
  }
  
  // @method proto undefined addEventListener(String type, Function listener[, Boolean useCapture]) -- Registers event listener on .socket. Event listener will be reregistered after reconnections
  PersistentWS.prototype.addEventListener = function addEventListener(type, listener, useCapture) {
    this.socket.addEventListener(type, listener, useCapture);
    
    var alreadyStored = this._getListenerIndex(type, listener, useCapture) !== -1;
    
    if(!alreadyStored) {
      // Store optional parameter useCapture as Boolean, for consistency with
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
      var useCaptureBoolean = Boolean(useCapture);
      
      this._listeners.push([type, listener, useCaptureBoolean]);
    }
  }
  
  // @method proto undefined removeEventListener(String type, Function listener[, Boolean useCapture]) -- Removes an event listener from .socket. Event listener will no longer be reregistered after reconnections
  PersistentWS.prototype.removeEventListener = function removeEventListener(type, listener, useCapture) {
    this.socket.removeEventListener(type, listener, useCapture);
    
    var indexToRemove = this._getListenerIndex(type, listener, useCapture);
    
    if(indexToRemove !== -1) {
      this._listeners.splice(indexToRemove, 1);
    }
  }
  
  // @method proto Boolean dispatchEvent(Event event) -- Same as calling .dispatchEvent() on .socket
  PersistentWS.prototype.dispatchEvent = function(event) {
    return this.socket.dispatchEvent(event);
  }
  
  // @method proto Number _getListenerIndex(String type, Function listener[, Boolean useCapture]) -- For internal use. Returns index of a listener in ._listeners
  PersistentWS.prototype._getListenerIndex = function _getListenerIndex(type, listener, useCapture) {
    // Store optional parameter useCapture as Boolean, for consistency with
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
    var useCaptureBoolean = Boolean(useCapture);
    
    var result = -1;
    
    this._listeners.forEach(function(v, i) {
      if(v[0] === type && v[1] === listener && v[2] === useCaptureBoolean) {
        result = i;
      }
    });
    
    return result;
  }
  
  // Only one object to return, so no need for module object to hold it
  return PersistentWS;
})(); // Module pattern

if(typeof module !== 'undefined' && module !== null && module.exports) {
  module.exports = PersistentWS;
}
