/**
 * Created by Joe on 12/8/2016.
 */

        $(document).ready(function () {
            var lon;
            var lat;
            $.getJSON("http://ip-api.com/json",function(data){
               lat=data.lat;
               lon=data.lon;
               console.log(lon);
    //get weather api
            var weather = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=4e44e3428b01d9a6ad76981f8ab8db5a"
            $.getJSON(weather, function(data1){
            var city = data1.name;
            var count =data1.sys.country;
            var type = data1.weather[0].description;
            var kelvin =data1.main.temp;
            var wind = data1.wind.speed;
            f = kelvin * (9/5)-459.67 ;
            c = kelvin-273.15;
            console.log(country);
            console.log(type);
            console.log(wind);

            $("#city").html(city);
            $("#country").html(count);
            $("#type").html(type);
            $("#wind").html(wind);
            $("#f").html(f);





            });
            });

        });