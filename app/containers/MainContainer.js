var React = require('react');
var NavBar = require('../components/NavBar');
var styles = require('../styles');

var MainContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            city: ''
        }
    },

    handleSubmitCity: function (e) {
        this.context.router.push('/forecast/' + this.state.city);
    },

    handleChangeCity: function (e) {
        this.setState({
            city: e.target.value
        });
    },

    render: function () {
        return (
            <div style={styles.full_height}>
                <NavBar onSubmitCity={this.handleSubmitCity}
                        onChangeCity={this.handleChangeCity}
                        city={this.state.city}
                />
                {this.props.children}
            </div>
        )
    }

});

module.exports = MainContainer;