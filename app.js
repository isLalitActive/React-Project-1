import React from 'react';
import ReactDOM from 'react-dom/client';

/*We're creating html structure using React*/
const heading = React.createElement('h1', {id: 'heading'}, 'This heading is from React.createElement'); 
const root = ReactDOM.createRoot(document.getElementById('root-container'));


/*Create html structure using JSX*/
const message = <h1 id="message">This message is coming from JSX</h1>

root.render(message);

