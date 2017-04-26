'use strict';

let Shape = require('@ull-edna-joseluis-kevin-35l2/ull-shape');

class Square extends Shape {
	/**
	* @construct Square
	* @param {hash} options Alto y Ancho
	*/
    constructor(options) {
      super(options)
    }
	/**
	* @function area
	* @return {number} Área de la figura
	*/
    area() {
      return  Math.pow(this.width,2) 
    }
}

Shape.Shapes.Square = Square;

module.exports = Square;
