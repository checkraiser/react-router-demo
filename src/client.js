var React = require('react');
var Router = require('react-router');
var Q = require('q');
var {Route, NotFoundRoute, RouteHandler, Link} = Router;

var PageOne = React.createClass({
	render: function(){
		return (
			<div>
				Page One
			</div>
		);
	}
});

var PageTwo = React.createClass({
	render: function(){
		return (
			<div>
				Page Two
			</div>
		);
	}
});

var PublicRoute = React.createClass({
	render: function(){
		return (
			<div>
				Public Page
			</div>
		);
	}
});

var Root = React.createClass({
	render: function(){
		return (
			<div>
				{/* just renders the routehandler as proposed */}
				<RouteHandler />
			</div>
		);
	}
});

var Application = React.createClass({
	statics: {
		willTransitionTo(){
			/*
			Still need to authenticate here to protect the pages that fall underneath
			and will still produce a redirect loop
			 */
		}
	},

	render: function(){
		return (
			<div>
				{/* it seems like I would need to render the routehandler again? */}
				application
				<RouteHandler />
			</div>
		);
	}
});


// proposed route structure
var routes = (
	<Route handler={Root}>
		<Route handler={Application}>
			<Route path="/" handler={PageOne}/>
			<Route path="/pagetwo" handler={PageTwo}/>
		</Route>

		<Route path="/somepublic" handler={PublicRoute}/>
	</Route>
)

Router.run(routes, function(Handler, state){
	React.render(<Handler />, document.getElementById("main"));
});
