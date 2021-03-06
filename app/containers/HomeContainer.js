var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
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
            <Home
                onSubmitCity={this.handleSubmitCity}
                onChangeCity={this.handleChangeCity}
                city={this.state.city}
            />
        )
    }

});

module.exports = HomeContainer;