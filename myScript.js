/**
 * Created by Joe on 12/8/2016.
 */

/*functions start*/
var swap = true;
function standardToMetric(){
if (swap===false){
    $("#f").html(f);
    swap=true;
    }
    else{
    $("#f").html(c);
    swap=false;
    }
}

/*functions end*/
    // this code is the code for the initial weather check
        $(document).ready(function () {
            var lon;
            var lat;
            $.getJSON("http://ip-api.com/json",function(data){
               lat=data.lat;
               lon=data.lon;


    //get weather api
            var weather = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=4e44e3428b01d9a6ad76981f8ab8db5a"
            $.getJSON(weather, function(data1){
            var city = data1.name;
            var count =data1.sys.country;
            var type = data1.weather[0].description;
            var kelvin =data1.main.temp;
            var wind = data1.wind.speed;
            f = Math.round((kelvin * (9/5)-459.67)*10)/10+" °F";
            c = Math.round((kelvin-273.15)*10)/10+" °C";
            

     //store in variables
            $("#city").html(city);
            $("#country").html(count);
            $("#type").html(type);
            $("#wind").html(wind);
            $("#f").html(f);
            document.getElementById('change').onclick=standardToMetric;
                
            });
      //get city from form input
                $("#getcity").click(function(){
                    var location = $('#stateInput').val();

                    //prevents the form from refreshing the page
                    event.preventDefault();
                    var weather = "http://api.openweathermap.org/data/2.5/weather?q="+location+",usa&appid=4e44e3428b01d9a6ad76981f8ab8db5a";
                    $.getJSON(weather, function(data1){
                            var city = data1.name;
                            var count =data1.sys.country;
                            var type = data1.weather[0].description;
                            var kelvin =data1.main.temp;
                            var wind = data1.wind.speed;
                            f = Math.round((kelvin * (9/5)-459.67)*10)/10+" °F";
                            c = Math.round((kelvin-273.15)*10)/10+" °C";;
                            var swap = true

                            //store in variables
                            $("#city").html(city);
                            $("#country").html(count);
                            $("#type").html(type);
                            $("#wind").html(wind);
                            $("#f").html(f);
                            document.getElementById('change').onclick=standardToMetric
                        }

                    );

                });


            });
        });





