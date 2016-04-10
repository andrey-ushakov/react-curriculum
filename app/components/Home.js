var React = require('react');
var styles = require('../styles');

var Home = React.createClass({
    render: function () {
        return (
            <div style={styles.home_container}>
                <h1 style={styles.home_header}>Enter a City and State</h1>
                <div style={styles.home_form}>
                    <input className="form-control" placeholder="St. George, Utah" type="text" value="" />
                    <button style={styles.home_btn} type="button" className="btn btn-success">Get Weather</button>
                </div>
            </div>
        )
    }
});

module.exports = Home;