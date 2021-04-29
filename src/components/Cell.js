import React, { Component } from 'react';
//import hidden from '../sprites/h.png';

export default class Cell extends Component{

    state = {
        icon: this.props.icon,
        hidden: this.props.hidden
    };

    auxClic = e => {
        console.log("Aux Clic");
        if(this.state.icon === "&nbsp;&nbsp;"){
            this.setState({
                icon: "M",
            });
        }
        if(this.state.icon === "M"){
            this.setState({
                icon: "?",
            });
        }
        if(this.state.icon === "?"){
            this.setState({
                icon: "-",
            });
        }
    };

    render(){
        //const{ handleClick } = this.props

        
        return(
            this.props.hidden === true
                ? <button onAuxClick={this.auxClic} id={this.props.id} onClick={this.props.accion}>
                    {this.state.icon}
                  </button>
                : <button id={this.props.id}>{this.props.value}</button>
        )
    };
}