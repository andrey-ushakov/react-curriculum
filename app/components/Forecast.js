var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

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
                    123
                </div>
            </div>
        );
    }
}

Forecast.propTypes = {
    header: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

module.exports = Forecast;