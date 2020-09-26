Weather Dashboard

Homework #6 Server side apis.

This weather dashboard uses the openweathermap api (https://openweathermap.org/api). It makes two seperate calls to the API for
current data and for the seven day forecast. The seven day forecast call uses longitude and latitude data from the current forecast 
call. The Dashboard allows the user to search for the weather for a particular city. City input is incorporated into the query url 
for the api. Search history is displayed in buttons that can be pressed to search again. The Dashboard shows today's weather and provides
a 5-day forecast.

<img src=Assets/Capture1.JPG>
<img src=Assets/Capture2.JPG>

_____________________________
Homework Acceptance Criteria:
_____________________________

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```



