var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/openWeatherHelpers');


var ForecastContainer = React.createClass({
    getInitialState: function () {
        return {
            city: '',
            isLoading : true,
            dailyForecast: []
        };
    },

    componentDidMount: function () {
        var city = this.props.routeParams.city;
        this.setState({
            city: city
        });
        //weatherHelpers.getCurrentWeather(city)
        //    .then(function(weather) {
        //        console.log(weather);
        //        //this.setState({
        //        //    isLoading: false,
        //        //    playersInfo: [players[0], players[1]]
        //        //});
        //    }.bind(this) );

        weatherHelpers.getDailyForecast(city)
            .then(function(forecast) {
                this.setState({
                    isLoading: false,
                    dailyForecast: forecast
                });
                //console.log("RETURN", forecast);
            }.bind(this) );
    },

    render: function () {
        return (
            <Forecast
                isLoading = {this.state.isLoading}
                header = {this.state.city}
                forecast = {this.state.dailyForecast}
            />
        )
    }

});

module.exports = ForecastContainer;