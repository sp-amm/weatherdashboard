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


        var queryurl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&cnt=5&appid=4c47461c514bba9e1bbc913bffac4116";
    
        $.ajax({
            url: queryurl,
            type: "GET",
        
            //success: function(){},
            //error: function(){ 
               // alert("We are unable to process your search right now. Try again later.");},

            }).then(function(response) {
                console.log(response);
                var date = new Date(response.list[0].dt*1000);
                $("#city").text(response.city.name + date);
                $("#currentdaytemp").text("Temperature: " + response.list[0].main.temp + " °C");
                $("#currentdayhumidity").text("Humidity: " + response.list[0].main.humidity + "%");
                $("#currentdaywind").text("Wind Speed: " + response.list[0].wind.speed + "Kmph");
                //$("#currentdayuv").text("UV Index: " + response.list[0].main.temp);
            });

     
       //var cityName = reponse.city.name;
        // console.log(cityName);
       //var currentdaytemp = response;
       
       //var forecastday1 =

    }; 
        
}); 