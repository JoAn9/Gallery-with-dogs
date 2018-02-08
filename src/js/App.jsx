import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/main.scss';
import {Gallery} from './Gallery.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Gallery />;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
