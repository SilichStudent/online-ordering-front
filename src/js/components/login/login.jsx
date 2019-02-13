import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component{

    constructor(props){
        super(props);

        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(){
        console.log("kik");
    }

    render(){
        return (
            <div className="login-page">
                <form onSubmit={this._onSubmit}>
                    <input type="email" className="form-inpt" placeholder="email"/>
                    <input type="password" className="form-inpt" placeholder="password"/>
                    <button type="submit" className="btn">Sign in</button>
                </form>
            </div>
        )
    }
}

export default connect(() => {return {}})(Login);