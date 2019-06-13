import React from 'react';

function MailBox(props){
    const messagesnonlus = props/messagesnonlus;
    return(
        <div>
            <h1>Hello !</h1>
           <h2>mVous avez un {messagesnonlus.lenght}messages non lus</h2> 
        </div>
    )
}

export default MailBox;