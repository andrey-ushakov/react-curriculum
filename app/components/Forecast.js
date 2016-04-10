var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function ForecastDay(props) {
    return (
        <div style={styles.forecast_day_container}>
            <img style={styles.forecast_day_img} alt="Weather" src={"app/images/icons/" + props.dayForecast.icon + ".svg"} />
            <h2 style={styles.forecast_day_h2}>{props.dayForecast.dateFormatted}</h2>
        </div>
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
                    {props.forecast.map(function(item, i){
                        return <ForecastDay dayForecast={item} key={i}/>
                    })}
                </div>
            </div>
        );
    }
}

Forecast.propTypes = {
    header: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    forecast: PropTypes.array.isRequired
};

module.exports = Forecast;