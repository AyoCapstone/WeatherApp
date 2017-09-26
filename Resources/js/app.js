$(document).ready(function() {
    
        var newLocation = document.getElementById('locationSearch');
        var autocomplete = new google.maps.places.Autocomplete(newLocation);
        var place = autocomplete.getPlace();
        //var newLat = place.geometry.location.A();
        //var newLong = place.geometry.location.F();

        
    
function weather() {
    
    var location = document.getElementById("location");
    var darkSkyApiKey = 'ad38988aa88b4261594ade3c95519e5a'; 
    var url = 'https://api.darksky.net/forecast/';
    
    $('#locationSubmit').click(function() {
        location.innerHTML = $('#locationSearch').val();
    });
    
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;        

      //location.innerHTML = 'Latitude is ' + newLat + '° Longitude is ' + newLong + '°';

       $.getJSON(url + darkSkyApiKey + "/" + latitude + "," + longitude + "?callback=?", function(json) {    
           
           function formatDate(date) {
            var d = new Date(date);
            var formattedDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
            //var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
            //var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
            //var formattedTime = hours + ":" + minutes;

            //formattedDate = formattedDate + " " + formattedTime;
               //return formattedDate;
               
               function getDayName(formattedDate, locale) {
                    var date = new Date(formattedDate);
                    return date.toLocaleDateString(locale, { weekday: 'long' });        
                }

                var day = getDayName(formattedDate);
                return day;
           }
           
           //Current conditions
           $('#curTemp').html(Math.round(json.currently.temperature) + '°F');
           $('#curAppTemp').html(Math.round(json.currently.apparentTemperature) + '°F');
           //$('#curTime').html(formatDate(json.currently.time * 1000));
           $('#curIcon').attr("class", json.currently.icon);
           $('#curSummary').html(json.currently.summary);
           $('#curWindSpeed').html(Math.round(json.currently.windSpeed) + 'mph');
           $('#curHumidity').html(Math.round(json.currently.humidity * 100) + '%');
           $('#curPressure').html(Math.round(json.currently.pressure / 100) + ' inHg');
           
           //Hourly condition
           $('#hourTemp').html(Math.round(json.hourly.data[2].temperature) + '°F');
           $('#hourAppTemp').html(Math.round(json.hourly.data[2].apparentTemperature) + '°F');
           //$('#hourTime').html(formatDate(json.hourly.data[2].time * 1000));
           $('#hourIcon').attr("class", json.hourly.data[2].icon);
           $('#hourSummary').html(json.hourly.data[2].summary);
           $('#hourWindSpeed').html(Math.round(json.hourly.data[2].windSpeed) + 'mph');
           $('#hourHumidity').html(Math.round(json.hourly.data[2].humidity * 100) + '%');
           $('#hourPressure').html(Math.round(json.hourly.data[2].pressure / 100) + ' inHg');
           
           //Tomorrow's conditions
           $('#tomHighTemp').html(Math.round(json.daily.data[1].temperatureHigh) + '°F');
           $('#tomLowTemp').html(Math.round(json.daily.data[1].temperatureLow) + '°F');
           //$('#tomTime').html(formatDate(json.daily.data[1].time * 1000));
           $('#tomIcon').attr("class", json.daily.data[1].icon);
           $('#tomSummary').html(json.daily.data[1].summary);
           $('#tomWindSpeed').html(Math.round(json.daily.data[1].windSpeed) + 'mph');
           $('#tomHumidity').html(Math.round(json.daily.data[1].humidity * 100) + '%');
           $('#tomPressure').html(Math.round(json.daily.data[1].pressure / 100) + ' inHg');
           
           //Weekday 1 conditions
           $('#w1HighTemp').html(Math.round(json.daily.data[1].temperatureHigh) + '°F');
           $('#w1LowTemp').html(Math.round(json.daily.data[1].temperatureLow) + '°F');
           $('#w1Time').html(formatDate(json.daily.data[1].time * 1000));
           $('#w1Icon').attr("class", json.daily.data[1].icon);
           $('#w1Summary').html(json.daily.data[1].summary);
           $('#w1WindSpeed').html(Math.round(json.daily.data[1].windSpeed) + 'mph');
           $('#w1Humidity').html(Math.round(json.daily.data[1].humidity * 100) + '%');
           $('#w1Pressure').html(Math.round(json.daily.data[1].pressure / 100) + ' inHg');
           
           //Weekday 2 conditions
           $('#w2HighTemp').html(Math.round(json.daily.data[2].temperatureHigh) + '°F');
           $('#w2LowTemp').html(Math.round(json.daily.data[2].temperatureLow) + '°F');
           $('#w2Time').html(formatDate(json.daily.data[2].time * 1000));
           $('#w2Icon').attr("class", json.daily.data[2].icon);
           $('#w2Summary').html(json.daily.data[2].summary);
           $('#w2WindSpeed').html(Math.round(json.daily.data[2].windSpeed) + 'mph');
           $('#w2Humidity').html(Math.round(json.daily.data[2].humidity * 100) + '%');
           $('#w2Pressure').html(Math.round(json.daily.data[2].pressure / 100) + ' inHg');
           
           //Weekday 3 conditions
           $('#w3HighTemp').html(Math.round(json.daily.data[3].temperatureHigh) + '°F');
           $('#w3LowTemp').html(Math.round(json.daily.data[3].temperatureLow) + '°F');
           $('#w3Time').html(formatDate(json.daily.data[3].time * 1000));
           $('#w3Icon').attr("class", json.daily.data[3].icon);
           $('#w3Summary').html(json.daily.data[3].summary);
           $('#w3WindSpeed').html(Math.round(json.daily.data[3].windSpeed) + 'mph');
           $('#w3Humidity').html(Math.round(json.daily.data[3].humidity * 100) + '%');
           $('#w3Pressure').html(Math.round(json.daily.data[3].pressure / 100) + ' inHg');
           
           //Weekday 4 conditions
           $('#w4HighTemp').html(Math.round(json.daily.data[4].temperatureHigh) + '°F');
           $('#w4LowTemp').html(Math.round(json.daily.data[4].temperatureLow) + '°F');
           $('#w4Time').html(formatDate(json.daily.data[4].time * 1000));
           $('#w4Icon').attr("class", json.daily.data[4].icon);
           $('#w4Summary').html(json.daily.data[4].summary);
           $('#w4WindSpeed').html(Math.round(json.daily.data[4].windSpeed) + 'mph');
           $('#w4Humidity').html(Math.round(json.daily.data[4].humidity * 100) + '%');
           $('#w4Pressure').html(Math.round(json.daily.data[4].pressure / 100) + ' inHg');
           
           //Weekday 5 conditions
           $('#w5HighTemp').html(Math.round(json.daily.data[5].temperatureHigh) + '°F');
           $('#w5LowTemp').html(Math.round(json.daily.data[5].temperatureLow) + '°F');
           $('#w5Time').html(formatDate(json.daily.data[5].time * 1000));
           $('#w5Icon').attr("class", json.daily.data[5].icon);
           $('#w5Summary').html(json.daily.data[5].summary);
           $('#w5WindSpeed').html(Math.round(json.daily.data[5].windSpeed) + 'mph');
           $('#w5Humidity').html(Math.round(json.daily.data[5].humidity * 100) + '%');
           $('#w5Pressure').html(Math.round(json.daily.data[5].pressure / 100) + ' inHg');
           
           //Weekday 6 conditions
           $('#w6HighTemp').html(Math.round(json.daily.data[6].temperatureHigh) + '°F');
           $('#w6LowTemp').html(Math.round(json.daily.data[6].temperatureLow) + '°F');
           $('#w6Time').html(formatDate(json.daily.data[6].time * 1000));
           $('#w6Icon').attr("class", json.daily.data[6].icon);
           $('#w6Summary').html(json.daily.data[6].summary);
           $('#w6WindSpeed').html(Math.round(json.daily.data[6].windSpeed) + 'mph');
           $('#w6Humidity').html(Math.round(json.daily.data[6].humidity * 100) + '%');
           $('#w6Pressure').html(Math.round(json.daily.data[6].pressure / 100) + ' inHg');
           
           //Weekday 7 conditions
           $('#w7HighTemp').html(Math.round(json.daily.data[7].temperatureHigh) + '°F');
           $('#w7LowTemp').html(Math.round(json.daily.data[7].temperatureLow) + '°F');
           $('#w7Time').html(formatDate(json.daily.data[7].time * 1000));
           $('#w7Icon').attr("class", json.daily.data[7].icon);
           $('#w7Summary').html(json.daily.data[7].summary);
           $('#w7WindSpeed').html(Math.round(json.daily.data[7].windSpeed) + 'mph');
           $('#w7Humidity').html(Math.round(json.daily.data[7].humidity * 100) + '%');
           $('#w7Pressure').html(Math.round(json.daily.data[7].pressure / 100) + ' inHg');
           
           
    
       var icons = new Skycons({"color":"#192124"}),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ];
          
        //for(i = list.length; i--; )
        //icons.set(list[i], list[i]);
        //icons.play();
        for(var i = list.length; i--; ) {
            var weatherType = list[i],
                elements = document.getElementsByClassName(weatherType);
            for (e = elements.length; e--;){
                icons.set( elements[e], weatherType );
            }
        }
        icons.play();
      });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
    //location.innerHTML = "Locating...";
  }
    
    
  weather();

});

//AIzaSyAGCCET4s34Zt0YxUNxEFhLZCti3DAKMoQ

