import React from 'react';

function Tick (){
    const element=(
        <div>
            <h1>>Heure locale</h1>
            <h2> il est actuellement {new Date().toLocaleTimeString}</h2>
        </div>
    )
    return element;
    //ici l'heure s'affiche mais on doit rafraichir la page pour relancer
}
export default Tick;