'use strict';


function justDollar1 (amt){
        var amt;   
        amt.toString();
          var newAmt =  amt.split(".");
          console.log(newAmt);
          var newAmt2 = newAmt[0];
          return newAmt2;
        }  


function justCents(centS){
   
    var centS ;  
        centS.toString();
          var newAmt =  centS.split(".");
          console.log(newAmt);
          
          var newAmt2 = newAmt[1];
          
          if(newAmt2.length <2){
              newAmt2 += '0';
          }
          if(newAmt2.length > 2){
              newAmt2 = newAmt2.substring(0, 2);
          }
          
        return newAmt2;
}


