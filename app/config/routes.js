var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainContainer = require('../containers/MainContainer');
var HomeContainer = require('../containers/HomeContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var Detail = require('../components/Detail');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
            <IndexRoute component={HomeContainer} />
            <Route path='forecast/:city' component={ForecastContainer} />
            <Route path='detail/:city' component={Detail} />
        </Route>
    </Router>
);

module.exports = routes;