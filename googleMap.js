/**
 * Created by Joe on 12/21/2016.
 */
//google map function


    function initMap() {
// use ip-api to get current geolocation for the initial map
        $.getJSON("http://ip-api.com/json", function (data) {
            var lat = data.lat;
            var lon = data.lon;

            //user open weather api to get city,country, and weather type.
            var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=4e44e3428b01d9a6ad76981f8ab8db5a"
            $.getJSON(weather, function (data1) {
                var city = data1.name;
                var count = data1.sys.country;
                var type = data1.weather[0].description;

                options={
                    center: {lat: lat, lng: lon},
                    scrollwheel: false,
                    zoom: 10,
                    draggable: false
                };

                // Create a map object and specify the DOM element for display.
                var map = new google.maps.Map(document.getElementById('map'), options);


                //below code is the marker code where it displays cloudy of sunny image marker depending on the weather.


                if (type.indexOf("clouds") != -1) {
                    var image = "gfx/cloudy.png";
                } else if (type.indexOf("rain") != -1) {
                    var image = "gfx/rainy.png";
                } else if (type.indexOf("snow") != -1) {
                    var image = "gfx/snow.png";
                } else if (type.indexOf("thunder") != -1) {
                    var image = "gfx/thunderstorm.png";
                } else if (type.indexOf("wind") != -1) {
                    var image = "gfx/wind.png";
                } else if (type.indexOf("clear") != -1) {
                    var image = "gfx/sunny.png";
                } else {
                    image = "gfx/cloudysunny.png";
                }


                var marker = new google.maps.Marker({
                    position: {lat: lat, lng: lon},
                    map: map,
                    icon: image
                });
                //this code is for the info window that pops up
                var contentString = '<div id="content">' +
                    '<p>' + city + '</p>' +
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                infowindow.open(map, marker);

                //function that refreshes map to new city on click of submit
                $("#getcity").click(function () {
                    var location = $('#stateInput').val();

                    event.preventDefault();
                    var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + location + ",usa&appid=4e44e3428b01d9a6ad76981f8ab8db5a";
                    $.getJSON(weather, function (data1) {
                        var lat = data1.coord.lat;
                        var lon = data1.coord.lon;
                        var city = data1.name;
                        var type = data1.weather[0].description;


                        //This code refreshes map to new city
                        var map = new google.maps.Map(document.getElementById('map'), {
                            center: {lat: lat, lng: lon},
                            scrollwheel: false,
                            zoom: 10,
                            draggable: false
                        });

                        if (type.indexOf("clouds") != -1) {
                            var image = "gfx/cloudy.png";
                        } else if (type.indexOf("rain") != -1) {
                            var image = "gfx/rainy.png";
                        } else if (type.indexOf("snow") != -1) {
                            var image = "gfx/snow.png";
                        } else if (type.indexOf("thunder") != -1) {
                            var image = "gfx/thunderstorm.png";
                        } else if (type.indexOf("wind") != -1) {
                            var image = "gfx/wind.png";
                        } else if (type.indexOf("clear") != -1) {
                            var image = "gfx/sunny.png";
                        } else {
                            image = "gfx/cloudysunny.png";
                        }



                        var marker = new google.maps.Marker({
                            position: {lat: lat, lng: lon},
                            map: map,
                            icon: image

                        });
                        //popup box for the new city.

                        var contentString = '<div id="content">' +
                            '<p>' + city + '</p>' +
                            '</div>';

                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });
                        infowindow.open(map, marker);


                    }); // this closing brace is for the get coord for the JSON from weather api
                });//this closing brace is for the click function
            }); // this ithe closing brace for the get weather api
        });//this is for the JSON ap-ip
    }//this is the closing brace for the initMap() function
