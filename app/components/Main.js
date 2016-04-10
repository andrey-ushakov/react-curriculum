var React = require('react');
var styles = require('../styles');

function NavBar () {
    return (
        <nav className="navbar navbar-default" style={styles.nav_style}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#" style={styles.nav_brand}>Weather App</a>
                </div>

                <form className="navbar-form navbar-right" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="St. George, Utah" style={styles.input_city} />
                    </div>
                    <button type="submit" className="btn btn-success">Get Weather</button>
                </form>
            </div>
        </nav>
    );
}


var Main = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;