import React, { Component } from 'react';

export default class SingIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
        }
    }

    

    render(){
        return(
            <>
                <h3>Sign in</h3>
                <label>User Name: </label>
                <input onChange={this.props.change} name="user" type="text" min="1" max="20" value={this.state.user}/>
                <br/><br/>
                <button type="button" onClick={this.props.func}>Login</button>
            </>
        )
    };
}