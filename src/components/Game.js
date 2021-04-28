import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            board:[],
        }
    }

    componentDidMount(){
        let w = this.props.width;
        let h = this.props.height;
        let m = this.props.mines;
        let url = "http://localhost:8080/minesweeper/v1/"+w+"/"+h+"/"+m;

        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({id: json.id});
                this.setState({board: json.board});
            })
    }

    render(){
        return(
            <>
            <Board key="board" id={this.state.id}
                width={this.state.board.width}
                height={this.state.board.height}
                mines={this.state.board.mines}
                openCells={this.state.board.openCells}
                cells={this.state.board.cells} />
                {
                    //console.log(this.state.board.cells)
                }
            </>
        )
    };
}