import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from './Tick';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Voiture from './Voiture';
import Garage from './Garage';
import Game from './Game';

import * as serviceWorker from './serviceWorker';

function Tick2(){
    const element= (
        <div>
            <h1>>Heure locale</h1>
            <h2> il est actuellement {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(<Game />, document.getElementById('popo2'));

}






//setinterval(Tick2,1000);
ReactDOM.render(<Game/>, document.getElementById('root'));

//ci-dessous une manière d'appeler un composont à partir d'une fonction
ReactDOM.render(<Tick/>, document.getElementById('popo'));
ReactDOM.render(<Clock/>, document.getElementById('popo3'));
ReactDOM.render(<Toggle/>, document.getElementById('popo4'));
ReactDOM.render(<LoginControl/>, document.getElementById('root2'));

const message= ['coucou jespere que tu passe une bonne journee', 're ca va','bye je pars']
/*syntaxe JSX: Javascript XMLDocument, elle permet d'ecrire du l'Html en React. C'est une simplification
const myelement = (<p>Coucou voici mon html {5+5}</p>);*/
const numbers=[4,9,3,8,2]
ReactDOM.render(<Clock/>, document.getElementById('root'));
//ReactDOM.render(myelement,document.getElementById('popo'));
//ReactDOM.render(<Garage />,document.getElementById('popo'));

   



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
