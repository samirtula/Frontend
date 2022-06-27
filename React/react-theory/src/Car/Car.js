import React from "react";
import Radium from "radium";
import './Car.scss'

//для отрисовки дочерних элементов color    {props.children}
//обращаемся к событию объявленному в App компонента props.onChangeTitle

const Car = props => {
    const inputClasses = ['input'];

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold');
    }

    console.log(props)
    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 44px 15px 0 rgba(0, 0, 0, .25)'
        }
    }
    return (
        <div className={'Car'} style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong> {props.year}</strong></p>
            {/*по событию onChange вызывать onChangeName в App.js*/}
            <input
                type='text'
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onChangeTitle}>Click</button>
            <button onClick={props.onDelete}>Delete</button>
            {props.children}
        </div>
    )
}

export default Radium(Car);