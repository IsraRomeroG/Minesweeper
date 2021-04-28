import React, { Component } from 'react';

export default class Board extends Component{

    render(){
        return(
            <>
            <h3>Soy Board</h3>
            <p>
                Width: {this.props.width} ...
                Hegiht: {this.props.height} ...
                Mines: {this.props.mines} ...
                OpenCells: {this.props.openCells}
            </p>
            <p>
                
            </p>
            </>
        )
    };
}