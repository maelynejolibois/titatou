import React from 'react';

//Lorsque j'appuie sur le bouton Toggle il y a un like du commentaire. Sinon c'est un dislike.
class Toggle extends React.Component{
    construtor(props){
        super(props);
        this.state={ like:false};
        //nous allons lier la  fonction handleclick avce le 'this' pour ne pas avoir à le répéter sans cesse...technique bonne à savoir. BIND = LIER(traduction)
        this.handleClick = this.handleClick.bind(this);
        }
        handleClick(){
            this.setState(state=>({like:!state.like}));
        }
        render(){
            return(
                <button onClick={this.handleClick}>
                  {this.state.like? 'like :)': 'Dislike :(' } 
                </button>
            );
        }
    }
export default Toggle;