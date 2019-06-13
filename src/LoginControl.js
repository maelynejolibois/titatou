import React from 'react';

//Saluer un user
function UserGreating(props){
    return <h1>Bienvenue dans ce merveilleux site</h1>;
}

//Saluer un visiteur
function GuestGreating(props){
    return <h1>Bienvenue, merci de vous inscrire dans ce merveilleux site</h1>
}
//Dire bonjour en fonction du statut de la personne: visiteur Ou user
function Greating(props){
    const isLoggedIn= props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreating/>;
    }
    return <UserGreating/>;
}

//Boutton de connexion qui executera le onClick passé en paramètre par le père
function LoginButton(props){
    
        return(
            <button onClick={props.onClick}>
                Login
            </button>
        );
    }

//Boutton de déconnexion qui executera le onClick passé en paramètre par le père

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false

        };
        this.handleLoginClick=this.handleLoginClick.bind(this); //bind permet de garder le contexte définit dans le père au fils pour que ce soit toujours fonctionnel. React.js hérité de js
        this.handleLogoutClick=this.handleLogoutClick.bind(this); 

    }

handleLoginClick(){
    this.setState({
        isLoggedIn:true
    })
}

handleLoginClick(){
    this.setState({
        isLoggedIn:false
    })
}


    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick = {this.handleLogoutClick}/>
         }else{
             button = <LogoutButton onClick = {this.handleLoginClick}/>
         }
        return(
            <div>
                <Greating isLoggedIn={isLoggedIn}/>>=
                {button}
            </div>
        );
    }
}
export default LoginControl;