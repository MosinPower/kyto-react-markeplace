import './main.css'
import {createBrowserHistory} from "history";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import Layout from "./containers/layout";
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import thunk from "redux-thunk";
import React from "react";
import ReactDOM from 'react-dom'
import createRootReducer from './reducers'


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
