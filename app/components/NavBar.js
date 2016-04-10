var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function NavBar (props) {
    return (
        <nav className="navbar navbar-default" style={styles.nav_style}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#" style={styles.nav_brand}>Weather App</a>
                </div>

                <form className="navbar-form navbar-right" role="search">
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="St. George, Utah"
                               style={styles.input_city}
                               onChange={props.onChangeCity}
                               value={props.city} />
                    </div>
                    <button type="submit"
                            className="btn btn-success"
                            onClick={props.onSubmitCity}>Get Weather</button>
                </form>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    onSubmitCity: PropTypes.func.isRequired,
    onChangeCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
};

module.exports = NavBar;