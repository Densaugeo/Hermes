# Hermes

[![Code Climate](https://codeclimate.com/github/Densaugeo/Misc-JS/badges/gpa.svg)](https://codeclimate.com/github/Densaugeo/Misc-JS)

Writes on html canvas with an old-style terminal raster font

To install, add Hermes.js from this repo to your webserver root or install with npm or bower

~~~
wget https://raw.githubusercontent.com/Densaugeo/Hermes/master/Hermes.js

OR

npm install --save git://github.com/Densaugeo/Hermes.git

OR

bower install --save git://github.com/Densaugeo/Hermes.git
~~~

Hermes is then available from the Hermes.js file:

~~~
<script type="text/javascript" src="/Hermes.js"></script>

<!--Or link from your bower folder-->
<script type="text/javascript" src="/bower_components/hermes/Hermes.js"></script>

<script type="text/javascript">

var ctx = someCanvasElement.getContext('2d');
ctx.hermesDraw('Hello world!', 100, 200); // Draws 'Hello world!' starting at 100, 200
ctx.hermesDraw('Hello world!', 100, 200, null, rgb('255, 128, 0')); // Draws 'Hello world!' starting at 100, 200 in orange

</script>
~~~

Note that Hermes adds the .hermesDraw() and .hermesRedraw() methods to the built-in CanvasRenderingContext2D prototype. You can call these methods just like any other canvas drawing method.

## License

MIT
