
describe("justDollar1", function() {
    
    it("should filter 10.03 to 10", function() {
        expect( justDollar1('10.03') ).toEqual('10');
    });
    it("should filter 0.03 to 0", function(){
        expect( justDollar1('0.03') ).toEqual('0');
    });
   it("should filter 01.3 to 1", function(){
        expect( justDollar1('0.03') ).toEqual('0');
    });

});


describe("justCents", function() {
    
    it("should filter 10.03 to 03 cents", function() {//1
        expect( justCents('10.03') ).toEqual('03');        
    });
    it("should filter 0.03 to 03 cents", function() {//2
        expect( justCents('0.03') ).toEqual('03');        
    });
    it("should filter 0.3 to 30 cents", function() {//3
        expect( justCents('0.3') ).toEqual('30');        
    });
    it("should filter $.3 to 30 cents", function() {//4
        expect( justCents('.3') ).toEqual('30');        
    });
    it("should filter $.03 to 03 cents", function() {//5
        expect( justCents('.03') ).toEqual('03');        
    });
    it("should filter $0.0 to 00 cents", function() {//6
        expect( justCents('0.0') ).toEqual('00');        
    });
    it("should filter $0.00 to 00 cents", function() {//7
        expect( justCents('0.00') ).toEqual('00');        
    });
    it("should filter $0.99 to 99 cents", function() {//8
        expect( justCents('0.99') ).toEqual('99');        
    });
    it("should filter $0.001 to 00 cents", function() {//9
        expect( justCents('0.001') ).toEqual('00');        
    });
    it("should filter $0.009 to 00 cents", function() {//10
        expect( justCents('0.009') ).toEqual('00');        
    });

});

/*
describe("strUpper", function() {
    
    it("should take a string and return it in all uppercase", function() {
        expect( strUpper('hello') ).toEqual('HELLO');        
    });
    
    it("should return the value given if not a typeof Array", function() {
        expect( strUpper(null) ).toBe(null);
        expect( strUpper(0) ).toEqual(0);
    });
    
});
*/