# Hermes.js

This is essentilly a hackish raster font for html canvases

Characters are 8 pixels wide; lines are 12 pixels high

Adds two methods to the browser's CanvasRenderingContext2D prototype

Dependencies: None

---

## CanvasRenderingContext2D

Inherits: None

```
var ctx = someCanvasElement.getContext('2d');
ctx.hermesDraw('x', 100, 200); // Draws an 'x' with its top left corner at 100, 200
ctx.hermesDraw('Hello world!', 100, 200); // Draws 'Hello world!' starting at 100, 200
ctx.hermesDraw('Hello world!', 100, 200, 7); // Draws 'Hello w' starting at 100, 200
ctx.hermesDraw('Hello world!', 100, 200, 0); // Draws nothing
ctx.hermesDraw('Hello world!', 100, 200, null); // Draws 'Hello world!' starting at 100, 200
ctx.hermesDraw('Hello world!', 100, 200, null, rgb('255, 128, 0')); // Draws 'Hello world!' starting at 100, 200 in orange
```

#### Methods

`undefined` proto **hermesDraw**`(String text, Number x, Number y, Number maxWidth, String style)` -- Draw a string in antique raster font

`undefined` proto **hermesRedraw**`(String text, Number x, Number y, Number maxWidth, String style)` -- Draw a string in antique raster font, clearing the area underneath

