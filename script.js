$(document).ready(function(){

 
    var city ="";

    $("#searchBtn").on('click', function(){

        city = $("#cityInput").val();
        console.log(city);
        var addButton = document.createElement('button');
        addButton.setAttribute('class', 'savehistory btn btn btn-secondary m-1 custom');
        addButton.textContent = city ;
        $(".buttonDiv").append(addButton);
        startQuery();
    });

    $(".buttonDiv").on('click', "button.savehistory", function(){
        city = $(this).text();
        console.log(city);
        startQuery();
    })

    function startQuery(){


        var queryurl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4c47461c514bba9e1bbc913bffac4116";
    
        $.ajax({
            url: queryurl,
            type: "GET",
        
            //success: function(){},
            //error: function(){ 
               // alert("We are unable to process your search right now. Try again later.");},

            }).then(function(response) {
                console.log(response);
                });

        //City name
       //var cityName = reponse.city.name;
        // console.log(cityName);
       //var currentdaytemp = response.list[0[0].main.temp] - 273.15;
       //console.log(currentdaytemp);
       //var forecastday1 =

    }; 
        
}); 