var Square = require('../lib/square');
var Shape = require('@ull-edna-joseluis-kevin-35l2/ull-shape');

describe("getArea Shape", function(){
	it("must compute the square shape area correctly", function(){
		let sh = new Shape ({ width: 100 }, 'Square');
		let result = sh.getArea();
		result.should.equal(10000);
	})
});

describe ("getArea Square", function() {
	it ("must compute the square area correctly", function() {
		let s = new Square({ width: 100 });
		let result = s.getArea();
		result.should.equal(10000);
	})
});
