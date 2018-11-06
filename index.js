import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HeaderComponent, FooterComponent} from "./src/component/HeaderFooter";
import Sign from './src/component/LogIn'
import createBrowserHistory from 'history/createBrowserHistory';
//import rootReducer from './src/reducers/holderReducers'
const createState = () => ({
    userInfo: {
        login: "",
        password: ""
    }
});

const history = createBrowserHistory();

let reducer = (state = createState(), action) => {
    if (action.type === 'ADD_USER') {
        return Object.assign({}, state, {userInfo: {login: action.payload.login, password: action.payload.password}});
    }
    return state;
};
const store = createStore(reducer);


class MainComponent2 extends React.Component {
    render() {
        return <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
            <HeaderComponent/>
                <Route path='/sign-in' render={()=> <Sign name='signin'/>}/>
                <Route path='/sign-up' render={()=> <Sign name='signup'/>}/>
            <FooterComponent/>
            </div>
        </BrowserRouter>
        </Provider>;
    }
}



ReactDOM.render(<MainComponent2 />, document.getElementById('root'));
window.store = store;