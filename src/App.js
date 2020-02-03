import React, { Fragment ,Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchPage from './Components/SearchPage/SearchPage';
import LoginPage from './Components/LoginPage/LoginPage';

class App extends Component {
  

  render() {
    const { isUserLoggedIn } = this.props;
    //const isUserLoggedIn  = true;
    return (
      <Fragment>
        {isUserLoggedIn ? <SearchPage /> : <LoginPage />}
      </Fragment>
    );
  };
}



const mapStateToProps = state => ({
  isUserLoggedIn: state.loginReducer.isUserLoggedIn,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
};
