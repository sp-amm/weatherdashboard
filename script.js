$(document).ready(function(){

 
    var city ="";

    $("#searchBtn").on('click', function(){

        var city = $("#cityInput").val();
        console.log(city);
        var addButton = document.createElement('button');
        addButton.setAttribute('class', 'savehistory btn btn btn-secondary m-1 custom');
        addButton.textContent = city ;
        $(".buttonDiv").append(addButton);
        //$(".buttonDiv").append("<button>"+city+"</button><br>");
        startQuery();
    });

    $(".buttonDiv").on('click', "button.savehistory", function(){
        var city = $(this).text();
        console.log(city);
        startQuery();
    })

    function startQuery(){


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

    };
        
}); 