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
export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong> {props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
        {props.children}
    </div>
)