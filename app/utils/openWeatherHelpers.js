var axios = require('axios');
var moment = require('moment');

var API_KEY = "a90959e88bff35d0715637af07029f55";

var helpers = {
    getCurrentWeather: function(city) {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + API_KEY)
            .then(function(response) {
                var data = response.data;
                return {
                    name: data.name,
                    timestamp: data.dt,
                    dateFormatted: moment.unix(data.dt).format("dddd, MMM D"),
                    humidity: data.main.humidity,
                    min_temp: data.main.temp_min,
                    max_temp: data.main.temp_max,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    main: data.weather[0].main
                };
            });
    },

    getDailyForecast: function(city) {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + API_KEY + '&cnt=5')
            .then(function(response) {
                var data = response.data.list;
                var ret = data.map(function(day){
                    return {
                        timestamp: day.dt,
                        dateFormatted: moment.unix(day.dt).format("dddd, MMM D"),
                        icon: day.weather[0].icon,
                        main: day.weather[0].main,
                        description: day.weather[0].description
                    }
                });
                return ret;
            });
    }
};

module.exports = helpers;