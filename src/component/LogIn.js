import React from 'react';
import {connect} from 'react-redux';

class Sign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setCredentials = this.setCredentials.bind(this);
        this.updateCredentials = this.updateCredentials.bind(this);
    }
    render() {
        return <div className={this.props.name}>
            <form onSubmit={function (event) {event.preventDefault();}} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={this.setLogin}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.setPassword}
                           placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.updateCredentials}>{this.props.name}</button>
            </form>
        </div>
    }

    setLogin(event) {
        this.setState({login: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    updateCredentials(){
        this.props.dispatch(this.setCredentials());
    }
    setCredentials() {
        return {
            type: 'ADD_USER',
            payload: {
                login: this.state.login,
                password: this.state.password,
            }
        };
    }
}

function mapStateToProps(state){
    return {
        login: state.userInfo.login,
        password: state.userInfo.password
    }
}
export default connect(mapStateToProps)(Sign);
