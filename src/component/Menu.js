import React from 'react';
import {Link} from 'react-router-dom';


export class MainMenu extends React.Component{
    render(){
        let menuItems = this.props.items;
        return  <div className={this.props.classNameMenu}>
            {menuItems.map(function (value, index) {
                const url =  "/" + value.toLowerCase().trim().replace(" ", "-");
                return <div className={'menuOption'} key={index}><Link to={url}>{value}</Link></div>
            })}
        </div>


    }
}

