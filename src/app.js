import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import reactImg from './images/react.png';

const jsx = (
    <div>
        <img src={reactImg} />
        <h1>React & Node Boilerplate</h1>
        <p>Ready to use with webpack & babel pre-configured.</p>
    </div>
);

ReactDOM.render(jsx,document.getElementById('root'));