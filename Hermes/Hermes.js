/**
 * Copyright 2013 Densaugeo (Nathan Yinger)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Affero General Public License for more details.
 * 
 * You should have received a copy of the Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 **
 * 
 * This is essentilly a hackish raster font for html canvases.
 * Characters are 8 pixels wide; lines are 12 pixels high.
 * 
 * Syntax:
 * [CanvasRenderingContext2D instance].hermesDraw(text, x, y, maxWidth);
 * 'test' is a string of one or more chars
 * 'x' and 'y' are the coordinates of the top left corner of the first char
 * 'maxWidth' is the maximum string width, in number of characters
 * 
 * Examples:
 * some_context.hermesDraw('x', 100, 200); // Draws an 'x' with its top left corner at 100, 200
 * some_context.hermesDraw('Hello world!', 100, 200); // Draws 'Hello world!' starting at 100, 200
 * some_context.hermesDraw('Hello world!', 100, 200, 7); // Draws 'Hello w' starting at 100, 200
 * 
 * by Densaugeo
 * 17 Apr 2013
 */
CanvasRenderingContext2D.prototype.hermesDraw = function(text, x, y, maxWidth, style) {
  text = String(text) || ' ';
  x = Number(x) || 0;
  y = Number(y) || 0;
  // If undefined (or zero), maxWidth defaults to width of text (i.e. no effect)
  maxWidth = Number(maxWidth) || text.length;
  
  if(text.length <= 0 || maxWidth <= 0) {
    return;
  }
  
  if(style) {
    this.fillStyle = style;
  }
  
  switch(text.charCodeAt(0)) {
    case 32:    // ' '
      break;
    case 33:    // '!'
      this.fillRect(x + 1, y +  2, 4,  3);
      this.fillRect(x + 2, y +  1, 2,  6);
      this.fillRect(x + 2, y +  8, 2,  2);
      break;
    case 34:    // '"'
      this.fillRect(x + 1, y +  1, 2,  3);
      this.fillRect(x + 2, y +  4, 1,  1);
      this.fillRect(x + 5, y +  1, 2,  3);
      this.fillRect(x + 5, y +  4, 1,  1);
      break;
    case 35:    // '#'
      this.fillRect(x + 1, y +  1, 2,  9);
      this.fillRect(x    , y +  3, 7,  1);
      this.fillRect(x + 4, y +  1, 2,  9);
      this.fillRect(x    , y +  7, 7,  1);
      break;
    case 36:    // '$'
      this.fillRect(x + 2, y     , 2,  2);
      this.fillRect(x + 1, y +  2, 5,  1);
      this.fillRect(x    , y +  3, 2,  2);
      this.fillRect(x + 1, y +  5, 4,  1);
      this.fillRect(x + 4, y +  6, 2,  2);
      this.fillRect(x    , y +  8, 5,  1);
      this.fillRect(x + 2, y +  9, 2,  2);
      break;
    case 37:    // '%'
      this.fillRect(x    , y +  3, 2,  2);
      this.fillRect(x + 5, y +  3, 1,  1);
      this.fillRect(x + 4, y +  4, 2,  1);
      this.fillRect(x + 3, y +  5, 2,  1);
      this.fillRect(x + 2, y +  6, 2,  1);
      this.fillRect(x + 1, y +  7, 2,  1);
      this.fillRect(x    , y +  8, 2,  1);
      this.fillRect(x    , y +  9, 1,  1);
      this.fillRect(x + 4, y +  8, 2,  2);
      break;
    case 38:    // '&'
      this.fillRect(x + 1, y +  1, 3,  1);
      this.fillRect(x    , y +  2, 2,  2);
      this.fillRect(x + 3, y +  2, 2,  2);
      this.fillRect(x + 1, y +  4, 3,  2);
      this.fillRect(x    , y +  5, 2,  4);
      this.fillRect(x + 3, y +  5, 2,  2);
      this.fillRect(x + 6, y +  5, 1,  2);
      this.fillRect(x + 4, y +  6, 2,  3);
      this.fillRect(x + 3, y +  8, 1,  1);
      this.fillRect(x + 1, y +  9, 3,  1);
      this.fillRect(x + 5, y +  9, 2,  1);
      break;
    case 39:    // '''
      this.fillRect(x + 2, y +  1, 2,  3);
      this.fillRect(x + 1, y +  4, 2,  1);
      break;
    case 40:    // '('
      this.fillRect(x + 4, y +  1, 2,  1);
      this.fillRect(x + 3, y +  2, 2,  1);
      this.fillRect(x + 2, y +  3, 2,  5);
      this.fillRect(x + 3, y +  8, 2,  1);
      this.fillRect(x + 4, y +  9, 2,  1);
      break;
    case 41:    // ')'
      this.fillRect(x + 2, y +  1, 2,  1);
      this.fillRect(x + 3, y +  2, 2,  1);
      this.fillRect(x + 4, y +  3, 2,  5);
      this.fillRect(x + 3, y +  8, 2,  1);
      this.fillRect(x + 2, y +  9, 2,  1);
      break;
    case 42:    // '*'
      this.fillRect(x + 1, y +  3, 2,  1);
      this.fillRect(x + 5, y +  3, 2,  1);
      this.fillRect(x + 2, y +  4, 4,  3);
      this.fillRect(x    , y +  5, 8,  1);
      this.fillRect(x + 1, y +  7, 2,  1);
      this.fillRect(x + 5, y +  7, 2,  1);
      break;
    case 43:    // '+'
      this.fillRect(x + 3, y +  3, 2,  5);
      this.fillRect(x + 1, y +  5, 6,  1);
      break;
    case 44:    // ','
      this.fillRect(x + 2, y +  8, 3,  2);
      this.fillRect(x + 1, y +  10, 2,  1);
      break;
    case 45:    // '-'
      this.fillRect(x    , y +  5, 7,  1);
      break;
    case 46:    // '.'
      this.fillRect(x + 2, y +  8, 3,  2);
      break;
    case 47:    // '/'
      this.fillRect(x + 6, y +  2, 1,  1);
      this.fillRect(x + 5, y +  3, 2,  1);
      this.fillRect(x + 4, y +  4, 2,  1);
      this.fillRect(x + 3, y +  5, 2,  1);
      this.fillRect(x + 2, y +  6, 2,  1);
      this.fillRect(x + 1, y +  7, 2,  1);
      this.fillRect(x    , y +  8, 2,  1);
      this.fillRect(x    , y +  9, 1,  1);
      break;
    case 48:    // '0'
      this.fillRect(x + 1, y +  1, 5,  1);
      this.fillRect(x    , y +  2, 2,  7);
      this.fillRect(x + 2, y +  6, 1,  2);
      this.fillRect(x + 3, y +  4, 1,  3);
      this.fillRect(x + 4, y +  3, 1,  2);
      this.fillRect(x + 5, y +  2, 2,  7);
      this.fillRect(x + 1, y +  9, 5,  1);
      break;
    case 49:    // '1'
      this.fillRect(x    , y +  3, 2,  1);
      this.fillRect(x + 2, y +  2, 2,  7);
      this.fillRect(x + 3, y +  1, 1,  1);
      this.fillRect(x    , y +  9, 6,  1);
      break;
    case 50:    // '2'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x    , y +  2, 2,  2);
      this.fillRect(x + 4, y +  2, 2,  3);
      this.fillRect(x + 3, y +  5, 2,  1);
      this.fillRect(x + 2, y +  6, 2,  1);
      this.fillRect(x + 1, y +  7, 2,  1);
      this.fillRect(x + 0, y +  8, 2,  1);
      this.fillRect(x + 4, y +  8, 2,  1);
      this.fillRect(x    , y +  9, 6,  1);
      break;
    case 51:    // '3'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x    , y +  2, 2,  1);
      this.fillRect(x + 4, y +  2, 2,  3);
      this.fillRect(x + 2, y +  5, 3,  1);
      this.fillRect(x + 4, y +  6, 2,  3);
      this.fillRect(x    , y +  8, 2,  1);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 52:    // '4'
      this.fillRect(x + 4, y +  1, 2,  8);
      this.fillRect(x + 3, y +  2, 1,  1);
      this.fillRect(x + 2, y +  3, 2,  1);
      this.fillRect(x + 1, y +  4, 2,  1);
      this.fillRect(x    , y +  5, 2,  1);
      this.fillRect(x    , y +  6, 7,  1);
      this.fillRect(x + 3, y +  9, 4,  1);
      break;
    case 53:    // '5'
      this.fillRect(x    , y +  1, 6,  1);
      this.fillRect(x    , y +  2, 2,  3);
      this.fillRect(x    , y +  5, 5,  1);
      this.fillRect(x + 4, y +  6, 2,  3);
      this.fillRect(x    , y +  8, 2,  1);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 54:    // '6'
      this.fillRect(x + 2, y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  1);
      this.fillRect(x    , y +  3, 2,  6);
      this.fillRect(x + 2, y +  5, 3,  1);
      this.fillRect(x + 4, y +  6, 2,  3);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 55:    // '7'
      this.fillRect(x    , y +  1, 7,  1);
      this.fillRect(x    , y +  2, 2,  2);
      this.fillRect(x + 5, y +  2, 2,  3);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 3, y +  6, 2,  1);
      this.fillRect(x + 2, y +  7, 2,  3);
      break;
    case 56:    // '8'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x    , y +  2, 2,  3);
      this.fillRect(x + 4, y +  2, 2,  3);
      this.fillRect(x + 2, y +  4, 1,  1);
      this.fillRect(x + 1, y +  5, 4,  1);
      this.fillRect(x + 3, y +  6, 1,  1);
      this.fillRect(x    , y +  6, 2,  3);
      this.fillRect(x + 4, y +  6, 2,  3);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 57:    // '9'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x    , y +  2, 2,  3);
      this.fillRect(x + 4, y +  2, 2,  3);
      this.fillRect(x + 1, y +  5, 4,  1);
      this.fillRect(x + 3, y +  6, 2,  2);
      this.fillRect(x + 2, y +  8, 2,  1);
      this.fillRect(x + 1, y +  9, 3,  1);
      break;
    case 57:    // '9'
      this.fillRect(x + 1, y +  1, 4,  1);
      break;
    case 58:    // ':'
      this.fillRect(x + 2, y +  3, 3,  2);
      this.fillRect(x + 2, y +  7, 3,  2);
      break;
    case 59:    // ';'
      this.fillRect(x + 2, y +  3, 3,  2);
      this.fillRect(x + 2, y +  7, 3,  2);
      this.fillRect(x + 3, y +  9, 2,  1);
      this.fillRect(x + 2, y + 10, 2,  1);
      break;
    case 60:    // '<'
      this.fillRect(x + 4, y +  1, 2,  1);
      this.fillRect(x + 3, y +  2, 2,  1);
      this.fillRect(x + 2, y +  3, 2,  1);
      this.fillRect(x + 1, y +  4, 2,  1);
      this.fillRect(x    , y +  5, 2,  1);
      this.fillRect(x + 1, y +  6, 2,  1);
      this.fillRect(x + 2, y +  7, 2,  1);
      this.fillRect(x + 3, y +  8, 2,  1);
      this.fillRect(x + 4, y +  9, 2,  1);
      break;
    case 61:    // '='
      this.fillRect(x + 1, y +  4, 6,  1);
      this.fillRect(x + 1, y +  6, 6,  1);
      break;
    case 62:    // '>'
      this.fillRect(x + 1, y +  1, 2,  1);
      this.fillRect(x + 2, y +  2, 2,  1);
      this.fillRect(x + 3, y +  3, 2,  1);
      this.fillRect(x + 4, y +  4, 2,  1);
      this.fillRect(x + 5, y +  5, 2,  1);
      this.fillRect(x + 4, y +  6, 2,  1);
      this.fillRect(x + 3, y +  7, 2,  1);
      this.fillRect(x + 2, y +  8, 2,  1);
      this.fillRect(x + 1, y +  9, 2,  1);
      break;
    case 63:    // '?'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x    , y +  2, 2,  1);
      this.fillRect(x + 4, y +  2, 2,  2);
      this.fillRect(x + 3, y +  4, 2,  1);
      this.fillRect(x + 2, y +  5, 2,  2);
      this.fillRect(x + 2, y +  8, 2,  2);
      break;
    case 64:    // '@'
      this.fillRect(x + 1, y +  1, 5,  1);
      this.fillRect(x    , y +  2, 2,  7);
      this.fillRect(x + 5, y +  2, 2,  2);
      this.fillRect(x + 3, y +  4, 4,  3);
      this.fillRect(x + 1, y +  9, 5,  1);
      break;
    case 65:    // 'A'
      this.fillRect(x + 2, y +  1, 2,  1);
      this.fillRect(x + 1, y +  2, 4,  1);
      this.fillRect(x    , y +  3, 2,  7);
      this.fillRect(x + 4, y +  3, 2,  7);
      this.fillRect(x + 2, y +  6, 2,  1);
      break;
    case 66:    // 'B'
      this.fillRect(x    , y +  1, 6,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 5, y +  2, 2,  3);
      this.fillRect(x + 3, y +  5, 3,  1);
      this.fillRect(x + 5, y +  6, 2,  3);
      this.fillRect(x    , y +  9, 6,  1);
      break;
    case 67:    // 'C'
      this.fillRect(x + 2, y +  1, 4,  1);
      this.fillRect(x + 1, y +  2, 2,  1);
      this.fillRect(x + 5, y +  2, 2,  2);
      this.fillRect(x    , y +  3, 2,  5);
      this.fillRect(x + 5, y +  7, 2,  2);
      this.fillRect(x + 1, y +  8, 2,  1);
      this.fillRect(x + 2, y +  9, 4,  1);
      break;
    case 68:    // 'D'
      this.fillRect(x    , y +  1, 5,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 4, y +  2, 2,  1);
      this.fillRect(x + 5, y +  3, 2,  5);
      this.fillRect(x + 4, y +  8, 2,  1);
      this.fillRect(x    , y +  9, 5,  1);
      break;
    case 69:    // 'E'
      this.fillRect(x    , y +  1, 7,  1);
      this.fillRect(x + 6, y +  2, 1,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 3, y +  5, 2,  1);
      this.fillRect(x + 5, y +  4, 1,  3);
      this.fillRect(x + 6, y +  8, 1,  1);
      this.fillRect(x    , y +  9, 7,  1);
      break;
    case 70:    // 'F'
      this.fillRect(x    , y +  1, 7,  1);
      this.fillRect(x + 5, y +  2, 2,  1);
      this.fillRect(x + 6, y +  3, 1,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 3, y +  5, 2,  1);
      this.fillRect(x + 5, y +  4, 1,  3);
      this.fillRect(x    , y +  9, 4,  1);
      break;
    case 71:    // 'G'
      this.fillRect(x + 2, y +  1, 4,  1);
      this.fillRect(x + 1, y +  2, 2,  1);
      this.fillRect(x + 5, y +  2, 2,  2);
      this.fillRect(x    , y +  3, 2,  5);
      this.fillRect(x + 1, y +  8, 2,  1);
      this.fillRect(x + 2, y +  9, 3,  1);
      this.fillRect(x + 5, y +  6, 2,  4);
      this.fillRect(x + 4, y +  6, 1,  1);
      break;
    case 72:    // 'H'
      this.fillRect(x    , y +  1, 2,  9);
      this.fillRect(x + 2, y +  5, 2,  1);
      this.fillRect(x + 4, y +  1, 2,  9);
      break;
    case 73:    // 'I'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x + 2, y +  2, 2,  7);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 74:    // 'J'
      this.fillRect(x    , y +  6, 2,  3);
      this.fillRect(x + 1, y +  9, 4,  1);
      this.fillRect(x + 4, y +  2, 2,  7);
      this.fillRect(x + 3, y +  1, 4,  1);
      break;
    case 75:    // 'K'
      this.fillRect(x    , y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x    , y +  9, 3,  1);
      this.fillRect(x + 5, y +  1, 2,  2);
      this.fillRect(x + 4, y +  3, 2,  2);
      this.fillRect(x + 3, y +  5, 2,  1);
      this.fillRect(x + 4, y +  6, 2,  2);
      this.fillRect(x + 5, y +  8, 2,  2);
      break;
    case 76:    // 'L'
      this.fillRect(x    , y +  1, 4,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x    , y +  9, 7,  1);
      this.fillRect(x + 5, y +  7, 2,  2);
      this.fillRect(x + 6, y +  6, 1,  1);
      break;
    case 77:    // 'M'
      this.fillRect(x    , y +  1, 2,  9);
      this.fillRect(x + 2, y +  2, 1,  3);
      this.fillRect(x + 3, y +  3, 1,  3);
      this.fillRect(x + 4, y +  2, 1,  3);
      this.fillRect(x + 5, y +  1, 2,  9);
      break;
    case 78:    // 'N'
      this.fillRect(x    , y +  1, 2,  9);
      this.fillRect(x + 2, y +  3, 1,  3);
      this.fillRect(x + 3, y +  4, 1,  3);
      this.fillRect(x + 4, y +  5, 1,  3);
      this.fillRect(x + 5, y +  1, 2,  9);
      break;
    case 79:    // 'O'
      this.fillRect(x + 2, y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  1);
      this.fillRect(x + 4, y +  2, 2,  1);
      this.fillRect(x    , y +  3, 2,  5);
      this.fillRect(x + 5, y +  3, 2,  5);
      this.fillRect(x + 1, y +  8, 2,  1);
      this.fillRect(x + 4, y +  8, 2,  1);
      this.fillRect(x + 2, y +  9, 3,  1);
      break;
    case 80:    // 'P'
      this.fillRect(x    , y +  1, 6,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 5, y +  2, 2,  3);
      this.fillRect(x + 3, y +  5, 3,  1);
      this.fillRect(x    , y +  9, 4,  1);
      break;
    case 81:    // 'Q'
      this.fillRect(x + 2, y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  1);
      this.fillRect(x + 4, y +  2, 2,  1);
      this.fillRect(x    , y +  3, 2,  5);
      this.fillRect(x + 5, y +  3, 2,  5);
      this.fillRect(x + 1, y +  8, 3,  1);
      this.fillRect(x + 3, y +  7, 1,  1);
      this.fillRect(x + 4, y +  6, 2,  4);
      this.fillRect(x + 3, y + 10, 4,  1);
      break;
    case 82:    // 'R'
      this.fillRect(x    , y +  1, 6,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 5, y +  2, 2,  3);
      this.fillRect(x + 3, y +  5, 3,  1);
      this.fillRect(x    , y +  9, 3,  1);
      this.fillRect(x + 4, y +  6, 2,  1);
      this.fillRect(x + 5, y +  7, 2,  3);
      break;
    case 83:    // 'S'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x    , y +  2, 2,  3);
      this.fillRect(x + 4, y +  2, 2,  2);
      this.fillRect(x + 1, y +  5, 3,  1);
      this.fillRect(x + 3, y +  6, 2,  1);
      this.fillRect(x    , y +  7, 2,  2);
      this.fillRect(x + 4, y +  7, 2,  2);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 84:    // 'T'
      this.fillRect(x    , y +  1, 6,  1);
      this.fillRect(x    , y +  2, 1,  1);
      this.fillRect(x + 5, y +  2, 1,  1);
      this.fillRect(x + 2, y +  2, 2,  7);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 85:    // 'U'
      this.fillRect(x    , y +  1, 2,  8);
      this.fillRect(x + 4, y +  1, 2,  8);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 86:    // 'V'
      this.fillRect(x    , y +  1, 2,  7);
      this.fillRect(x + 4, y +  1, 2,  7);
      this.fillRect(x + 1, y +  8, 4,  1);
      this.fillRect(x + 2, y +  9, 2,  1);
      break;
    case 87:    // 'W'
      this.fillRect(x    , y +  1, 2,  6);
      this.fillRect(x + 5, y +  1, 2,  6);
      this.fillRect(x + 3, y +  5, 1,  2);
      this.fillRect(x + 1, y +  7, 2,  3);
      this.fillRect(x + 4, y +  7, 2,  3);
      break;
    case 88:    // 'X'
      this.fillRect(x    , y +  1, 2,  3);
      this.fillRect(x + 4, y +  1, 2,  3);
      this.fillRect(x + 1, y +  4, 4,  1);
      this.fillRect(x + 2, y +  5, 2,  1);
      this.fillRect(x + 1, y +  6, 4,  1);
      this.fillRect(x    , y +  7, 2,  3);
      this.fillRect(x + 4, y +  7, 2,  3);
      break;
    case 89:    // 'Y'
      this.fillRect(x    , y +  1, 2,  4);
      this.fillRect(x + 4, y +  1, 2,  4);
      this.fillRect(x + 1, y +  5, 4,  1);
      this.fillRect(x + 2, y +  6, 2,  3);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 90:    // 'Z'
      this.fillRect(x    , y +  3, 1,  1);
      this.fillRect(x    , y +  2, 2,  1);
      this.fillRect(x    , y +  1, 7,  1);
      this.fillRect(x + 4, y +  2, 3,  1);
      this.fillRect(x + 3, y +  3, 2,  2);
      this.fillRect(x + 2, y +  5, 2,  1);
      this.fillRect(x + 1, y +  6, 2,  2);
      this.fillRect(x    , y +  8, 2,  1);
      this.fillRect(x    , y +  9, 7,  1);
      this.fillRect(x + 5, y +  8, 2,  1);
      this.fillRect(x + 6, y +  7, 1,  1);
      break;
    case 91:    // '['
      this.fillRect(x + 2, y +  1, 4,  1);
      this.fillRect(x + 2, y +  2, 2,  7);
      this.fillRect(x + 2, y +  9, 4,  1);
      break;
    case 92:    // '\'
      this.fillRect(x    , y +  2, 1,  2);
      this.fillRect(x + 1, y +  3, 1,  2);
      this.fillRect(x + 2, y +  4, 1,  2);
      this.fillRect(x + 3, y +  5, 1,  2);
      this.fillRect(x + 4, y +  6, 1,  2);
      this.fillRect(x + 5, y +  7, 1,  2);
      this.fillRect(x + 6, y +  8, 1,  2);
      break;
    case 93:    // ']'
      this.fillRect(x + 2, y +  1, 4,  1);
      this.fillRect(x + 4, y +  2, 2,  7);
      this.fillRect(x + 2, y +  9, 4,  1);
      break;
    case 94:    // '^'
      this.fillRect(x    , y +  3, 2,  1);
      this.fillRect(x + 1, y +  2, 2,  1);
      this.fillRect(x + 2, y +  1, 3,  1);
      this.fillRect(x + 3, y     , 1,  1);
      this.fillRect(x + 4, y +  2, 2,  1);
      this.fillRect(x + 5, y +  3, 2,  1);
      break;
    case 95:    // '_'
      this.fillRect(x    , y + 10, 8,  1);
      break;
    case 96:    // '`'
      this.fillRect(x + 2, y     , 2,  2);
      this.fillRect(x + 3, y +  2, 2,  1);
      break;
    case 97:    // 'a'
      this.fillRect(x + 1, y +  4, 4,  1);
      this.fillRect(x + 4, y +  5, 2,  4);
      this.fillRect(x + 1, y +  6, 3,  1);
      this.fillRect(x    , y +  7, 2,  2);
      this.fillRect(x + 1, y +  9, 3,  1);
      this.fillRect(x + 5, y +  9, 2,  1);
      break;
    case 98:    // 'b'
      this.fillRect(x    , y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 3, y +  4, 3,  1);
      this.fillRect(x + 5, y +  5, 2,  4);
      this.fillRect(x    , y +  9, 2,  1);
      this.fillRect(x + 3, y +  9, 3,  1);
      break;
    case 99:    // 'c'
      this.fillRect(x + 1, y +  4, 4,  1);
      this.fillRect(x    , y +  5, 2,  4);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 4, y +  8, 2,  1);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 100:   // 'd'
      this.fillRect(x + 3, y +  1, 1,  1);
      this.fillRect(x + 4, y +  1, 2,  8);
      this.fillRect(x + 1, y +  4, 3,  1);
      this.fillRect(x    , y +  5, 2,  4);
      this.fillRect(x + 1, y +  9, 3,  1);
      this.fillRect(x + 5, y +  9, 2,  1);
      break;
    case 101:   // 'e'
      this.fillRect(x + 1, y +  4, 4,  1);
      this.fillRect(x    , y +  5, 2,  4);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 2, y +  6, 4,  1);
      this.fillRect(x + 4, y +  8, 2,  1);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 102:   // 'f'
      this.fillRect(x + 2, y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 4, y +  2, 2,  1);
      this.fillRect(x    , y +  5, 5,  1);
      this.fillRect(x    , y +  9, 4,  1);
      break;
    case 103:   // 'g'
      this.fillRect(x + 1, y +  4, 3,  1);
      this.fillRect(x + 5, y +  4, 2,  1);
      this.fillRect(x    , y +  5, 2,  3);
      this.fillRect(x + 4, y +  5, 2,  6);
      this.fillRect(x + 1, y +  8, 3,  1);
      this.fillRect(x    , y + 10, 2,  1);
      this.fillRect(x + 1, y + 11, 4,  1);
      break;
    case 104:   // 'h'
      this.fillRect(x    , y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 4, y +  4, 2,  1);
      this.fillRect(x + 3, y +  5, 1,  1);
      this.fillRect(x + 5, y +  5, 2,  5);
      this.fillRect(x    , y +  9, 3,  1);
      break;
    case 105:   // 'i'
      this.fillRect(x + 3, y +  1, 2,  2);
      this.fillRect(x + 1, y +  4, 4,  1);
      this.fillRect(x + 3, y +  5, 2,  4);
      this.fillRect(x + 1, y +  9, 6,  1);
      break;
    case 106:   // 'j'
      this.fillRect(x + 4, y +  1, 2,  2);
      this.fillRect(x + 2, y +  4, 4,  1);
      this.fillRect(x + 4, y +  5, 2,  6);
      this.fillRect(x + 1, y + 11, 4,  1);
      this.fillRect(x    , y +  9, 2,  2);
      break;
    case 107:   // 'k'
      this.fillRect(x    , y +  1, 3,  1);
      this.fillRect(x + 1, y +  2, 2,  7);
      this.fillRect(x + 5, y +  4, 2,  1);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 3, y +  6, 2,  1);
      this.fillRect(x + 4, y +  7, 2,  1);
      this.fillRect(x + 5, y +  8, 2,  2);
      this.fillRect(x    , y +  9, 3,  1);
      break;
    case 108:   // 'l'
      this.fillRect(x + 1, y +  1, 4,  1);
      this.fillRect(x + 3, y +  2, 2,  7);
      this.fillRect(x + 1, y +  9, 6,  1);
      break;
    case 109:   // 'm'
      this.fillRect(x    , y +  4, 6,  1);
      this.fillRect(x    , y +  5, 2,  5);
      this.fillRect(x + 3, y +  5, 1,  4);
      this.fillRect(x + 5, y +  5, 2,  5);
      break;
    case 110:   // 'n'
      this.fillRect(x    , y +  4, 5,  1);
      this.fillRect(x    , y +  5, 2,  5);
      this.fillRect(x + 4, y +  5, 2,  5);
      break;
    case 111:   // 'o'
      this.fillRect(x + 1, y +  4, 4,  1);
      this.fillRect(x    , y +  5, 2,  4);
      this.fillRect(x + 4, y +  5, 2,  4);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 112:   // 'p'
      this.fillRect(x    , y +  4, 2,  1);
      this.fillRect(x + 3, y +  4, 3,  1);
      this.fillRect(x + 1, y +  5, 2,  6);
      this.fillRect(x + 5, y +  5, 2,  4);
      this.fillRect(x + 3, y +  9, 3,  1);
      this.fillRect(x    , y + 11, 4,  1);
      break;
    case 113:   // 'q'
      this.fillRect(x + 1, y +  4, 3,  1);
      this.fillRect(x + 5, y +  4, 2,  1);
      this.fillRect(x    , y +  5, 2,  4);
      this.fillRect(x + 4, y +  5, 2,  6);
      this.fillRect(x + 1, y +  9, 3,  1);
      this.fillRect(x + 3, y + 11, 4,  1);
      break;
    case 114:   // 'r'
      this.fillRect(x    , y +  4, 3,  1);
      this.fillRect(x + 4, y +  4, 2,  2);
      this.fillRect(x + 1, y +  5, 2,  4);
      this.fillRect(x + 3, y +  6, 1,  1);
      this.fillRect(x + 5, y +  5, 2,  2);
      this.fillRect(x    , y +  9, 4,  1);
      break;
    case 115:   // 's'
      this.fillRect(x + 1, y +  4, 4,  1);
      this.fillRect(x    , y +  5, 2,  1);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 1, y +  6, 2,  1);
      this.fillRect(x + 3, y +  7, 2,  1);
      this.fillRect(x    , y +  8, 2,  1);
      this.fillRect(x + 4, y +  8, 2,  1);
      this.fillRect(x + 1, y +  9, 4,  1);
      break;
    case 116:   // 't'
      this.fillRect(x + 2, y +  2, 1,  1);
      this.fillRect(x + 1, y +  3, 2,  6);
      this.fillRect(x    , y +  4, 6,  1);
      this.fillRect(x + 2, y +  9, 3,  1);
      this.fillRect(x + 4, y +  8, 2,  1);
      break;
    case 117:   // 'u'
      this.fillRect(x    , y +  4, 2,  5);
      this.fillRect(x + 4, y +  4, 2,  5);
      this.fillRect(x + 1, y +  9, 3,  1);
      this.fillRect(x + 5, y +  9, 2,  1);
      break;
    case 118:   // 'v'
      this.fillRect(x    , y +  4, 2,  4);
      this.fillRect(x + 4, y +  4, 2,  4);
      this.fillRect(x + 1, y +  8, 4,  1);
      this.fillRect(x + 2, y +  9, 2,  1);
      break;
    case 119:   // 'w'
      this.fillRect(x    , y +  4, 2,  4);
      this.fillRect(x + 5, y +  4, 2,  4);
      this.fillRect(x + 3, y +  6, 1,  2);
      this.fillRect(x + 1, y +  8, 2,  2);
      this.fillRect(x + 4, y +  8, 2,  2);
      break;
    case 120:   // 'x'
      this.fillRect(x    , y +  4, 2,  1);
      this.fillRect(x + 5, y +  4, 2,  1);
      this.fillRect(x + 1, y +  5, 2,  1);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 2, y +  6, 3,  2);
      this.fillRect(x + 1, y +  8, 2,  1);
      this.fillRect(x + 4, y +  8, 2,  1);
      this.fillRect(x    , y +  9, 2,  1);
      this.fillRect(x + 5, y +  9, 2,  1);
      break;
    case 121:   // 'y'
      this.fillRect(x + 1, y +  4, 2,  4);
      this.fillRect(x + 5, y +  4, 2,  4);
      this.fillRect(x + 2, y +  8, 4,  1);
      this.fillRect(x + 4, y +  9, 2,  1);
      this.fillRect(x + 3, y + 10, 2,  1);
      this.fillRect(x    , y + 11, 4,  1);
      break;
    case 122:   // 'z'
      this.fillRect(x    , y +  4, 6,  1);
      this.fillRect(x    , y +  5, 1,  1);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 3, y +  6, 2,  1);
      this.fillRect(x + 1, y +  7, 2,  1);
      this.fillRect(x    , y +  8, 2,  1);
      this.fillRect(x + 5, y +  8, 1,  1);
      this.fillRect(x    , y +  9, 6,  1);
      break;
    case 123:   // '{'
      this.fillRect(x + 3, y +  1, 3,  1);
      this.fillRect(x + 2, y +  2, 2,  2);
      this.fillRect(x + 1, y +  4, 2,  1);
      this.fillRect(x    , y +  5, 2,  1);
      this.fillRect(x + 1, y +  6, 2,  1);
      this.fillRect(x + 2, y +  7, 2,  2);
      this.fillRect(x + 3, y +  9, 3,  1);
      break;
    case 124:   // '|'
      this.fillRect(x + 3, y +  1, 2,  4);
      this.fillRect(x + 3, y +  6, 2,  4);
      break;
    case 125:   // '}'
      this.fillRect(x    , y +  1, 3,  1);
      this.fillRect(x + 2, y +  2, 2,  2);
      this.fillRect(x + 3, y +  4, 2,  1);
      this.fillRect(x + 4, y +  5, 2,  1);
      this.fillRect(x + 3, y +  6, 2,  1);
      this.fillRect(x + 2, y +  7, 2,  2);
      this.fillRect(x    , y +  9, 3,  1);
      break;
    case 126:   // '~'
      this.fillRect(x    , y +  2, 2,  2);
      this.fillRect(x + 1, y +  1, 3,  1);
      this.fillRect(x + 3, y +  2, 2,  1);
      this.fillRect(x + 4, y +  3, 3,  1);
      this.fillRect(x + 6, y +  2, 1,  1);
      this.fillRect(x + 6, y +  1, 2,  1);
      break;
      
      // End of hermesDraw() primary switch.
  }
  
  --maxWidth;
  text = text.substring(1);
  x += 8;
  this.hermesDraw(text, x, y, maxWidth);
  
  // End of hermesDraw()
}

CanvasRenderingContext2D.prototype.hermesRedraw = function hermesRedraw(text, x, y, maxWidth, style) {
  this.clearRect(x, y, 8*(maxWidth || text.length), 12);
  this.hermesDraw(text, x, y, maxWidth, style);
}

