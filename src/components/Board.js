import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component{

    constructor(props){
        super(props);
        this.state = {
            cells: undefined,  
        }
    }
    componentDidUpdate(){
        (this.state.cells === undefined && this.props.cells !== undefined)
        ? this.setState({cells: this.props.cells})
        : console.log("NOT YET");
    }

    handleClick = (e) => {
        console.log(e.target.id);
        const id = e.target.id;
        let url = "http://localhost:8080/minesweeper/v1/"+this.props.id+"/"+id;

        fetch(url, {method: 'PUT'})
            .then(res => res.json())
            .then(json => {
                this.setState({cells: json.cells});
            })
    }

    render(){
        return(
            <>
            <h3>Soy Board</h3>
            <p>
                Width: {this.props.width} ...
                Height: {this.props.height} ...
                Mines: {this.props.mines} ...
                OpenCells: {this.props.openCells}
            </p>
            <div>
                {
                this.state.cells !== undefined ?
                this.state.cells.map((el) => 
                    <div>{el.map((c) => <Cell hidden={c.hidden} value={c.value} key={c.id} id={c.id} handleClick={this.handleClick} />)}</div>
                )
                : <p key="loading">Loading Board...</p>
                }
            </div>
            </>
        )
    };
}