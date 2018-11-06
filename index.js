import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HeaderComponent, FooterComponent} from "./src/component/HeaderFooter";
import Sign from './src/component/LogIn'
import createBrowserHistory from 'history/createBrowserHistory';
//import rootReducer from './src/reducers/holderReducers'


const history = createBrowserHistory();
//const store = createStore(rootReducer);

/*
class MainComponent extends React.Component {
    render() {
        return <BrowserRouter history={history}>
                <HeaderComponent/>


                <FooterComponent/>
        </BrowserRouter>;
    }
}*/
class MainComponent2 extends React.Component {
    render() {
        return <BrowserRouter history={history}>
            <div>
            <HeaderComponent/>
                <Route path='/sign-in' render={function () {
                    return <Sign name='signin'/>
                }}/>
                <Route path='/sign-up' render={function () {
                    return <Sign name='signup'/>
                }}/>
            <FooterComponent/>
            </div>
        </BrowserRouter>;
    }
}



ReactDOM.render(<MainComponent2 />, document.getElementById('root'));