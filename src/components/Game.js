import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            board:[],
            counter: 0
        }
    }

    componentDidMount(){
        console.log("MODE: ",this.props.mode)
        if(this.props.mode === "new"){
            let w = this.props.width;
            let h = this.props.height;
            let m = this.props.mines;
            let url = "https://api.israromero.com/minesweeper/v1/"+w+"/"+h+"/"+m;
            fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({id: json.id});
                this.setState({board: json.board});
            })
        }else{
            console.log("Setea el board por modo");
            this.setState({id: this.props.id});
            this.setState({board: this.props.loaded});
        }
        

        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    stopTick(){
        this.state.board.status !== 0 ? clearInterval(this.timer) : console.log("Continue ...");
    }

    handleClick = (e) => {
        console.log("Click en: "+e.target.id);
        const id = e.target.id;
        let url = "https://api.israromero.com/minesweeper/v1/"+this.state.id+"/"+id;

        fetch(url, {method: 'GET'})
            .then(res => res.json())
            .then(json => {
                this.setState({board: json});
            }).catch().finally(
                ()=>{this.stopTick()}
            )
    }

    saveGame = e => {
        let url = "https://api.israromero.com/minesweeper/v1/"+this.state.id+"/"+this.props.session.name;

        fetch(url, {method: 'POST'})
            .then(alert("Game Saved"))
    }

    //val(){this.state.counter !== 0 ? this.stopTick() : console.log("NA")}

    render(){
        return(
            <>
            {this.state.board !== undefined
                ? <Board key="board" id={this.state.id}
                    width={this.state.board.width}
                    height={this.state.board.height}
                    mines={this.state.board.mines}
                    status={this.state.board.status}
                    cells={this.state.board.cells}
                    handleClick={this.handleClick}
                    time={this.state.counter} />
                :<></>
            }
            { this.props.session.name !== null ? <button onClick={this.saveGame}>Save Game</button> : <></>}

            </>
        )
    };
}