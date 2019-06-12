import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import Garage from './Garage';
import Game from './Game';


import * as serviceWorker from './serviceWorker';

//syntaxe JSX: Javascript XMLDocument, elle permet d'ecrire du l'Html en React. C'est une simplification
const myelement = (<p>Coucou voici mon html {5+5}</p>);




ReactDOM.render(<Game />, document.getElementById('root'));
//ReactDOM.render(myelement,document.getElementById('popo'));
ReactDOM.render(<Garage />,document.getElementById('popo'));

   



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
