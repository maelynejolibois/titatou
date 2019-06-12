import React from'react';
import Voiture from './Voiture';

class Garage extends React.Component{
    //attributs


    //methods


render(){
    const def="grise";
    const voit={color:"grise", brand: "peugeot", owner:"None", id:"WWWW"};
    //on ouvre les parentheses pour injecter de l'html via l'annotation JSX - Javascript Xml
    //c'est ici que l'on défini le contenu html affichabke à l'appel de la valise <Garage/>dans index.js
    return(
        <div>
            <h1>Quelles sont les voitures que j'ai dans mon garage ?</h1>
            <Voiture color='verte' brand="Mustang" owner="Sylvain" id="N27AGR"/><br/>
            <Voiture color="rouge" brand="Mercedes" owner="Jean" id="N27AGR"/><br/>
            <Voiture color="bleue" brand="Ford" owner="Dalida" id="N27AGR"/><br/>
            <Voiture color="noire" brand="Citroen" owner="Sylvie" id="N27AGR"/><br/>
            <Voiture color="noire"/><br/>
        </div>
    );
}
}
export default Garage; 