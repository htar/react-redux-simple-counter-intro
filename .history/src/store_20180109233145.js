import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise'
import logger from 'redux-logger'
import promiseMiddleware from './middleware'
import { combineReducers } from 'redux';
const state = {
    fantasyTeams : {
        list:[]
    }
}

function fantasyTeams(state={}, action) {
    switch(action.type) {
        case 'TOURNAMENTS_LOADING_STARTED':
            console.log('loading_started');
            break;
        case 'TOURNAMENTS_LOADING_FINISHED':
            return { ...state, list: [...action.tournaments] };
        case 'TOURNAMENTS_LOADING_FAILED':
            console.error(action.error)
            break;
        default:
            break;
    }
    return state;
}




let reducers = combineReducers({
    routing: routerReducer, 
    fantasyTeams
})

let storeWithMiddleWare = applyMiddleware(promiseMiddleware, promise, logger)(createStore)

const store = storeWithMiddleWare(reducers, state)

export const history = syncHistoryWithStore(browserHistory, store)

export default store;