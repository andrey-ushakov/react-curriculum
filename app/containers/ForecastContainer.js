var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/openWeatherHelpers');


var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

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
        weatherHelpers.getDailyForecast(city)
            .then(function(forecast) {
                this.setState({
                    isLoading: false,
                    dailyForecast: forecast
                });
                //console.log("RETURN", forecast);
            }.bind(this) );
    },

    handleDayClick: function (dayWeather) {
      console.log(dayWeather);
        this.context.router.push({
            pathname: '/detail/' + this.state.city//,
            //state: {
            //    weather: weather
            //}
        })
    },

    render: function () {
        return (
            <Forecast
                isLoading = {this.state.isLoading}
                header = {this.state.city}
                forecast = {this.state.dailyForecast}
                handleDayClick = {this.handleDayClick}
            />
        )
    }

});

module.exports = ForecastContainer;