var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function Home(props) {
    return (
        <div style={styles.home_container}>
            <h1 style={styles.home_header}>Enter a City and State</h1>
            <div style={styles.home_form}>
                <input className="form-control"
                       onChange={props.onChangeCity}
                       placeholder="St. George, Utah"
                       type="text"
                       value={props.city} />
                <button
                    style={styles.home_btn}
                    type="button"
                    onClick={props.onSubmitCity}
                    className="btn btn-success">Get Weather</button>
            </div>
        </div>
    )
}

Home.propTypes = {
    onSubmitCity: PropTypes.func.isRequired,
    onChangeCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
};

module.exports = Home;