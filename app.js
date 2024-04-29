const heading = React.createElement('h1', {
    id : 'heading',
    name: 'title'
}, 'Hello from React');
const root = ReactDOM.createRoot(document.getElementById('root-container'));
root.render(heading);