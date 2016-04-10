var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function Detail(props) {
    return (
        <div>
            <div style={styles.forecast_day_container} >
                <img style={styles.forecast_day_img} alt="Weather" src={"app/images/icons/" + props.weather.icon + ".svg"} />
                <h2 style={styles.forecast_day_h2} >{props.weather.dateFormatted}</h2>
            </div>

            <div style={styles.detail_container_bottom}>
                <p>{props.city}</p>
                <p>{props.weather.description}</p>
                <p><span>min temp: </span><span>{props.weather.min_temp}</span><span> degrees</span></p>
                <p><span>max temp: </span><span>{props.weather.max_temp}</span><span> degrees</span></p>
                <p><span>humidity: </span><span>{props.weather.humidity}</span></p>
            </div>
        </div>
    )
}

Detail.propTypes = {
    city: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired
};

module.exports = Detail;