import React from 'react';
import Square from './Square';

class Board extends React.Component{

    
    //ici on crée la méthode square de board
    renderSquare(i){
        return <Square valeur={this.props.squares[i]} onClick={() =>this.props.onClick(i)}/>//ici la balise a 2 propriétés valeur et onClick
    }
  

    render(){

        
     
        return(
            <div>
                <div className="bord-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>

                <div className="bord-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}

                </div>
                <div className="bord-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>

        );
    }
}

  
export default Board;

