import React, { Component } from 'react';

export default class Game extends Component{

    state = {
        id: "",
        board:[],
    };

    componentDidMount(){
        //Parámetros
        let w = this.props.width;
        let h = this.props.height;
        let m = this.props.mines;
        let url = "http://3.131.109.163:8080/minesweeper/v1/"+w+"/"+h+"/"+m;

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
            <h2>Soy Game</h2>
            
            </>
        )
    };
}