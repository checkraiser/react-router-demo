var React = require('react');
var auth = require('./auth');
module.exports = (Component) => {
  class Authenticated extends React.Component {
    render () {
      return <Component {...this.props}/>
    }
  }

  Authenticated.willTransitionTo = function (transition) {
    var nextPath = transition.path;
    if (!auth.loggedIn()) {
      transition.redirect('/login',{},
        { 'nextPath' : nextPath });
    }
  };

  return Authenticated;
};
