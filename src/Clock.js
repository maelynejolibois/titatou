import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };

    } 
     render(){
         return(
            <div>
                <h1>>Heure locale</h1>
                <h2> il est actuellement {new Date().toLocaleTimeString}</h2>
            </div>
              )
        
            }  
         //une fois que l'affichage (render) a lieu, la fonction suivante s'execute directement 
         //ComponentDiMount = Le composant vient de se mettre en place
         compponentDiMount(){
            this. timerID = setInterval(()=>this.tictac(), 1000)
         }
         //voici une fonction qui permet de mettre à jour la date dans l'état (this.state.date) 
         //ATT: qui dit mise à jour de l'état dit: setState
         tictac(){
             this.setState({
                 date: new Date()
             });
         }

         //juste avant de finir lifecycle et de quitter le composant, nous effaçonc le contenu de l'intervalle de temps
         componentWillUnount(){
             clearInterval(this.timerID);
         }
    }

export default Clock;