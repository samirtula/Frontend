import React from "react";

/*function car () {
    return (
        <div>This is car component</div>
    );
}*/
/*const car = () => {
    return (
        <div>This is car component</div>
    );
}*/
/*const car = () => (
    <div>This is car component
        <strong>Nissan</strong>
    </div>
)*/

/*
export default car;*/

/*
// return простой верстки достаточно просто круглых скобок без фигурных скобок
export default () => (
    <div>
        <p>This is car component</p>
        <strong> Nissan {Math.round(Math.random() * 100)}</strong>
    </div>
)*/

//для отрисовки дочерних элементов color    {props.children}
//обращаемся к событию объявленному в App компонента props.onChangeTitle
//<Car/>
export default (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong> {props.year}</strong></p>
        {/*по событию onChange вызывать onChangeName в App.js*/}
        <input type='text' onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onChangeTitle}>Click</button>
        <button onClick={props.onDelete}>Delete</button>
        {props.children}
    </div>
)