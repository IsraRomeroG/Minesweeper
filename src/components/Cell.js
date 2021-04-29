import React, { Component } from 'react';
//import hidden from '../sprites/h.png';

export default class Cell extends Component{

    state = {
        icon: this.props.icon,
        hidden: this.props.hidden
    };

    auxClic = e => {
        console.log("Aux Clic");
        console.log("["+this.state.icon+"]")
        if(this.state.icon === "1"){
            this.setState({
                icon: "X",
            });
        }
        if(this.state.icon === "X"){
            this.setState({
                icon: "?",
            });
        }
        if(this.state.icon === "?"){
            this.setState({
                icon: "1",
            });
        }
    };

    render(){
        //const{ handleClick } = this.props

        
        return(
            this.props.hidden === true
                ? <button onAuxClick={this.auxClic} id={this.props.id} onClick={this.props.accion} className="blue">
                    {this.state.icon === "1" ? <>&nbsp;&nbsp;</> : this.state.icon }
                  </button>
                : <button id={this.props.id}  className="gray">{this.props.value === -1 ? <>💣</> : (this.props.value === 0 ? <>&nbsp;&nbsp;</> : this.props.value )}</button>
        )
    };
}