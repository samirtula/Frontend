import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     React.createElement('div', {},  React.createElement('button', {
//         onClick: () => console.log('Click'),
//         disabled: false
//     }, 'Клик'))
// );

root.render(
    <App/>
);