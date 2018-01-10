
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import App from './App';

const mapStateToProps = (state) => {
  return {
    fantasyTeams: state.fantasyTeams,
    routing: state.routing
  }
}

const mapDispachToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const Root = connect(mapStateToProps, mapDispachToProps)(App);

export default Root;


