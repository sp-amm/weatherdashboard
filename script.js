$(document).ready(function(){

 
    

    $("#searchBtn").on('click', function(){

        var city = $("#cityInput").val();
        $("#buttonDiv").append("<button>"+city+"</button>");
        
        var queryurl = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4c47461c514bba9e1bbc913bffac4116";
        console.log(city);
    
        $.ajax({
            url: queryurl,
            type: "GET",
        
            //success: function(){},
            //error: function(){ 
               // alert("We are unable to process your search right now. Try again later.");},

            }).then(function(response) {
                console.log(response);
                });

  
        
        });


        
    });