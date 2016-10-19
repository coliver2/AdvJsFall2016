
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
        
        $("#yes").on("click", function(){
           $('div.day').css("background-color", "green");
        });
        
        $("#no").on("click", function(){
           $('div.day').css("background-color", "red");
        });
    
        
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
   
    
    
    
    
    
    var str = '<div class="row">';
    var days = 1;
    
    for(var i = 1; i <= (numberOfDaysInMonth + firstDayOfWeek); i++){       
       
       
        if(i <= firstDayOfWeek){
            str += '<div class="day">' +  '</div>';
            
        }
        else {
            str += '<div class="day">' + days + '</div>';
            days++;
        }
          
           
        
       
       if(i %7 === 0){
           str += '</div> <div class="row">';
       }
   }
   
   str+= '</div>';
    
    $("#results").html(str);
     
     $( "div.day" ).click(checkDiv);
                        
        function checkDiv() {
          
          var color = $( this ).css( "background-color" );
          console.log(color);
          
            if(color === 'rgba(0, 0, 0, 0)'){
          $( this ).css( "background-color", 'green' );
      
           }
           else if (color === 'rgb(0, 128, 0)'){
               $( this ).css("background-color", 'red');
           }
           else if (color === 'rgb(255, 0, 0)'){
               $( this ).css("background-color", 'rgba(0,0,0,0)');
           }
           
      
      
        }
    
    
    
}


