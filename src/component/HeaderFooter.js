import React from 'react';
import {MainMenu} from './Menu';

export class HeaderComponent extends React.Component {
    render(){
            return <div className='header'>
                <h2>Header</h2>
                <MainMenu items={['Home', 'Service', 'Delivery','Contacts','Our partners']} classNameMenu={'mainMenu'}/>
                <MainMenu items={['Sign Up', 'Sign In']} classNameMenu={'loginMenu'}/>
            </div>;
    }
}
export class FooterComponent extends React.Component {
    render(){
        return <div className='footer'>
            <h2>Footer</h2>
        </div>;
    }
}

