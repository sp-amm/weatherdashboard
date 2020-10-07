$(document).ready(function(){

    //Loads Adelaide's weather on opening because it looks better
    var city ="Adelaide";
    startQuery();
    
    var searchCount = 0
    
    //Search function and button and create button functions
    $("#searchBtn").on('click', function(){

        city = $("#cityInput").val();
        var addButton = document.createElement('button');
        addButton.setAttribute('class', 'savehistory btn btn-secondary m-1 btn-block');
        addButton.textContent = city ;
        $(".buttonDiv").append(addButton);
        startQuery();
    });

    $(".buttonDiv").on('click', "button.savehistory", function(){
        city = $(this).text();
        console.log(city);
        startQuery();
    })

    //function to call the data from the api
    function startQuery(){
    
        var currentqueryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=4c47461c514bba9e1bbc913bffac4116";
        
        $.ajax({
            url: currentqueryUrl,
            type: "GET",
        
        }).then(function(response){
            var lat = response.coord.lat;
            var lon = response.coord.lon;

            $("#city").text("Today in " + response.name);
            $("#currentdaytemp").text("Temperature: " + response.main.temp + " °C")
            $("#currentdayhumidity").text("Humidity: " + response.main.humidity + " %")
            $("#currentdaywind").text("Wind Speed: " + response.wind.speed + " kph")
            currentdaylogoUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
            $("#currentdayimg").html("<img src=" + currentdaylogoUrl + ">")
            
        
                //Second API call for the five day forecast using the lat lon data from the first call
                var forecastqueryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=metric&exclude=current,minutely,hourly,alerts&appid=4c47461c514bba9e1bbc913bffac4116"
                
                $.ajax({
                    url: forecastqueryUrl,
                    type: "GET",

                    }).then(function(response) {
                        
                        //Loop to go through the api daily weather array for the 5 day forecast data
                        for (var i = 0; i < 5; i++)  {
                            
                        //To get the date into dd/mm/yyyy format - referenced from Ore4444 at https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript?lq=1 
                        var date = new Date(response.daily[i].dt*1000);
                        var day = date.getDate();
                        var month = date.getMonth()+1;
                        var year = date.getFullYear();
                      
                        
                        $("#date" + i).text("Date: "+ day + '-' + month + '-' + year);
                        logoUrl = "http://openweathermap.org/img/wn/" + response.daily[i].weather[0].icon + "@2x.png"
                        $("#weatherLogo" + i).html("<img src=" +logoUrl + ">");
                        $("#temp" + i).text("Temperature: " + response.daily[i].temp.day + " °C");
                        $("#humidity" + i).text("Humidity: " + response.daily[i].humidity + " %");
                        $("#currentdayuv").text("UV Rating: "+ response.daily[0].uvi);

                        };   
                    });

                
        });
    
    //startquery end function bracket
    }; 

//Doc ready function end bracket        
}); 