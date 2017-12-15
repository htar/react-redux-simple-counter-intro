
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import App from './App';

const mapStateToProps = (state) => {
//   console.log(state, 'this is our state')
  return {
    counter: state.counter,
    routing: state.routing
  }
}

const mapDispachToProps = (dispatch) => {
//   console.log(dispatch, actionCreators, 'da ladno')
  return bindActionCreators(actionCreators, dispatch);
}
// console.log(mapDispachToProps, '???')

const Root = connect(mapStateToProps, mapDispachToProps)(App);
// console.log(Root)
export default Root;


