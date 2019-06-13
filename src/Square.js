import React from 'react';



class Square extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            valeur: null, //ici on définit dés le départ valeur null
        }
    }

//ici on fait appel à la valeur avec this.props.valeur --function(){ alert("click");} est une fonction anonyne qui s execute une fois elle peut être ecrite de 2 manières
    render(){
        return(
            // <button className ="square" onClick={function(){ alert("click");}}>
            /* <button className ="square" onClick={()=> alert("click")}> */
            <button className ="square" onClick={()=> this.props.onClick()}>

                {this.props.valeur}
            </button>
            
        );//ici on reprend la valeur {this.props.valeur}
    }
}
