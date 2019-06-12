import React from 'react';
import Square from './Square';
import Board from './Board';


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={
            history:[{squares: Array(9).fill(null)}],
            xIsNext: true,
            stepNumber:0,//c'est le numéro d'étape
        }
    }
    //fonction qui va permettre d'aller à l'étape du jeu souhaitée..c'est celle ci qui nous permet de voyager dans le temps au moment voulu
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext:(step % 2)=== 0, 
        });
    }

    handleClick(i){//permet de mettre à jour
        //history contient tous les tableaux d'états passés
        // const history= this.state.history; devvient
        const history= this.state.history.slice(0, this.state.stepNumber +1);
        //contient l'état actuel
        const current = history[history.length -1];
        const squares_copy=current.squares.slice();//cela veut dire recopie le tableu de l'état actuel
        if(calculateWinner(squares_copy)|| squares_copy[i]){
            return;
        }
        squares_copy[i]=this.state.xIsNext ? "X" : "O";
        //conditon ternere si this.state.xIsNext est true alors x sinon o
        this.setState({//permet de modifier
            history:history.concat([{
                squares: squares_copy,
            }]),
            stepNumber: history.length,
            xIsNext:!this.state.xIsNext,//alors l inverse de true soit false
        });//permet de faire une copie l'état général du tableau Array
    }

    render(){
        const history= this.state.history;//history contient tous les tableaux d'états passés
        const current = history[this.state.stepNumber];//contient l'état actuel
        const winner = calculateWinner(current.squares);
        //moves contient les différents coups de chaque joueur, Move =1 coup numéro 1, Move 2 = coup numéro 2... etc. On va faire un mapping des différents coups avec les tableaux en fonction de l'avancement(move 1 sera mappé avec le tableau à l'état 1... etc)
        const moves = history.map((step, move)=>{
            const desc = move ? "Aller à l'étape #" + move : "Aller à la situation initiale";
            //desc contient la déscription à afficher à l'écran sur le bouton à enclencher pour voyager dans le temps. A chaque appui sur le bouton on demande l'état du Board au numéro de Move demandé
            return (
                <li key={move}>
                    <button onClick={ ()=> this.jumpTo(move)}>{desc}</button>
                </li>

            )
       })

        let status; //déclaration de la variable status avec let on pointe sans donner de valeur
        if(winner){
            status="Le gagnant est: "+winner;
        
        }else{
            status="Prochain joueur: "+(this.state.xIsNext ? "X" : "O");
        }
        
        return(
            <div className="game">
                <div className="game-board">
                    <Board  squares={current.squares} onClick={(i)=> this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Game;