var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var DayIcon = require('./DayIcon');

function ForecastDay(props) {
    return (
        <DayIcon
            text = {props.dayForecast.dateFormatted}
            icon = {props.dayForecast.icon}
            clickHandler = {props.handleDayClick}
        />
    );
}

function Forecast(props) {
    if(props.isLoading) {
        return (
            <div style={styles.forecast_container}>
                <h1 style={styles.forecast_header}> Loading </h1>
            </div>
        );
    } else {
        return (
            <div style={styles.forecast_container}>
                <h1 style={styles.forecast_header}> {props.header} </h1>
                <p style={styles.forecast_p}>Select a day</p>
                <div style={styles.forecast_week_container}>
                    {props.forecast.map(function(item, i) {
                        return <ForecastDay dayForecast={item} key={i} handleDayClick={props.handleDayClick.bind(null, item)} />
                    })}
                </div>
            </div>
        );
    }
}

Forecast.propTypes = {
    header: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    forecast: PropTypes.array.isRequired,
    handleDayClick: PropTypes.func.isRequired
};

module.exports = Forecast;