import React, { Component } from 'react';

export default class Cell extends Component{



    render(){
        const{ handleClick } = this.props

        return(
            <>
            <button id={this.props.id} onClick={handleClick}>
                {(this.props.hidden === true) ? <>-</> : this.props.value}
            </button>
            </>
        )
    };
}