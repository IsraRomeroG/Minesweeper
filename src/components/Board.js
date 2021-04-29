import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            cells: [],  
        }
    }

    componentDidMount(){
        this.setState({cells: this.props.cells})
        //(this.state.cells === undefined && this.props.cells !== undefined)
        //? this.setState({cells: this.props.cells})
        //: console.log("NOT YET");
    }

//    handleClick = (e) => {
//        console.log(e.target.id);
//        const id = e.target.id;
//        let url = "http://localhost:8080/minesweeper/v1/"+this.props.id+"/"+id;
//
//        fetch(url, {method: 'GET'})
//            .then(res => res.json())
//            .then(json => {
//                this.setState({cells: json.cells});
//                console.log(json.cells)
//            })
//    }

    render(){
        //const{ handleClick } = this.props

        return(
            <>
            <p>
                {this.props.status === 0
                  ? <>Let's Play 🚀</>
                  : <>{this.props.status === 1
                    ? <>You Win 😎</>
                    : <>{this.props.status === -1
                        ? <>You Loose 💩</>
                        : <>Loading ...</>
                    }</>
                  }</>
                }
            </p>
            <span>{this.props.time}</span>
                {
                this.props.cells !== undefined ?
                this.props.cells.map((el, index) => 
                    <div key={index}>
                        {el.map((c) => <Cell accion={this.props.handleClick} hidden={c.hidden} value={c.value} icon="1" key={c.id} id={c.id} />)}
                    </div>
                )
                : <p key="loading">Loading Board...</p>
                }
            </>
        )
    };
}