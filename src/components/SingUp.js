import React, { Component } from 'react';

export default class SingUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
        }
    }

    handleChange = (e) =>{
        this.setState({user: e.target.value})
    }

    saveUser = e => {
        const u= this.state.user
        let url = "https://api.israromero.com/minesweeper/v1/users/"+u;

        fetch(url, {method: 'POST', body: JSON.stringify(u),})
            .then(res => res.json())
            .then(json => {
                console.log({json});
            })

        alert("User saved!")
    };

    render(){
        return(
            <>
                <h3>Sign up</h3>
                <label>User Name: </label>
                <input onChange={this.handleChange} name="user" type="text" min="1" max="20" value={this.state.user}/>
                <br/><br/>
                <button type="button" onClick={this.saveUser}>Save User</button>
            </>
        )
    };
}