/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//just numbers
function sandboxInputNumber(){
  var el;

  beforeEach(function(){
    el = document.createElement('input');
    el.setAttribute('type', 'text');
    el.setAttribute('name', 'txtName');
    el.setAttribute('value', '1122');    
    el.setAttribute('id', 'txtOne');    
    
    document.body.appendChild(el);
  });


  afterEach(function(){
    document.body.removeChild(el);
    el = null;
 });
 
}
//numbers and text
function sandboxInputNumberandText(){
  var el;

  beforeEach(function(){
    el = document.createElement('input');
    el.setAttribute('type', 'text');
    el.setAttribute('name', 'txtName');
    el.setAttribute('value', 'abbc123');    
    el.setAttribute('id', 'txtTwo');    
    
    document.body.appendChild(el);
  });


  afterEach(function(){
    document.body.removeChild(el);
    el = null;
 });
 
}
//text decoration
function sandboxTextDec(){
  var el;

  beforeEach(function(){
    el = document.createElement('div');
    
    el.setAttribute('name', 'txtName');
    el.setAttribute('value', 'abbc123');    
    el.setAttribute('id', 'txtTwo');    
    
    document.body.appendChild(el);
  });


  afterEach(function(){
    document.body.removeChild(el);
    el = null;
 });
 
}


//is numeric test
describe("getElementContent text", function(){
  
  sandboxInputNumber();

  it('should return true if the input box value is only numeric', function(){
      var elemContent = getInputBox('#txtOne');
      expect( elemContent ).toBe(true);
      
  });  

  
});

//is numeric and text test
describe("getElementContent text", function(){
  
  sandboxInputNumberandText();

  it('should return false if the input box value is not all numeric', function(){
      var elemContent = getInputBox('#txtTwo');
      expect( elemContent ).toBe(false);
   
  });
  
 
  
});

//text dec test
describe("getElementContent text", function(){
  
  sandboxTextDec();

  it('should match overline', function(){
      var elemContent = getTextDecoration('td');
      expect( elemContent ).toEqual('underline');
   
  });
  
 
  
});