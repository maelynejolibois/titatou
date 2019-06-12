import React from 'react'; 
import Garage from './Garage';


//creation d'une classe de voiture 
//extends: on hérite de la calsse Component définie dans React
class Voiture extends React.Component{
    //attributs


//methodes
constructor(){
    super(); //il prend le comportement du parent, execution du constructor qui 

    //initialisation avec STATE
    //this.state={color:"rouge"};
}

render(){
    //return <h2>Coucou, je suis la meilleure voiture du monde, et ma couleur est {this.state.color}</h2>
    return <h2>Coucou, je suis la meilleure voiture du monde, et ma couleur est {this.state.color}
    {this.props.color},appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
}
}

export default Voiture;