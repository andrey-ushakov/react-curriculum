var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function DayIcon(props) {
    return (
        <div style={styles.day_container} onClick={props.clickHandler}>
            <img style={styles.day_img} alt="Weather" src={"app/images/icons/" + props.icon + ".svg"} />
            <h2 style={styles.day_h2} >{props.text}</h2>
        </div>
    )
}

DayIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
};

module.exports = DayIcon;