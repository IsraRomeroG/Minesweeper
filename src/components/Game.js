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

    handleClick = (e) => {
        console.log("Click en: "+e.target.id);
        const id = e.target.id;
        let url = "http://localhost:8080/minesweeper/v1/"+this.state.id+"/"+id;

        fetch(url, {method: 'GET'})
            .then(res => res.json())
           .then(json => {
                this.setState({board: json});
                console.log(json)
            })
    }


    render(){
        return(
            <>
            <Board key="board" id={this.state.id}
                width={this.state.board.width}
                height={this.state.board.height}
                mines={this.state.board.mines}
                status={this.state.board.status}
                cells={this.state.board.cells}
                handleClick={this.handleClick} />
                {
                    //console.log(this.state.board.cells)
                }
            </>
        )
    };
}