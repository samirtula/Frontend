import './App.css';
import React, {Component} from "react";
import Car from "./Car/Car";

class App extends Component {

    /*
    состояние элемента
    */

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Mazda', year: 2016},
            {name: 'Audi', year: 2010},
        ],
        pageTitle: 'React components',
        showCars: false
    }

    changeTitleHandler = newTitle => {
        // console.log('React click')

        // const oldTitle = this.state.pageTitle;
        // const newTitle = oldTitle + ' (changed)';

        //передаем новое состояните. Передаем только то свойство которое хотим изменить
        this.setState({
            pageTitle: newTitle,
        })
    }

    inputHandler = event => {
        this.setState({
            pageTitle: event.target.value
        })

    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        })
    }

    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;

        const cars = [...this.state.cars];
        cars[index] = car;

        this.setState({
            cars:cars
            //cars можно и такую запись в случае если ключ и значение совпадают
        })
    }

    deleteHandler(index) {
        const cars = [...this.state.cars];
        cars.splice(index, 1);

        this.setState({
            cars
        })

    }

    //при каждом изменении состояния вызывается метод рендер
    render() {
        console.log('Render')
        // const cars = this.state.cars;
        const divStyle = {
            textAlign: 'center',
        };
        /*
        вешаем обработчик события
        https://ru.reactjs.org/docs/events.html
        */
        return (
            <div style={divStyle}>
                <h1>
                    {this.state.pageTitle}
                </h1>

                {/*  <input type="text" onChange={this.inputHandler} />*/}
                {/*<button onClick={this.changeTitleHandler.bind(this, 'Changed')}>*/}
                {/*    Change title*/}
                {/*</button>*/}

                <button onClick={this.toggleCarsHandler}>Toggle cars</button>



                {/*переходы производятся встроенными функциями js*/}
                {this.state.showCars
                    ?
                    this.state.cars.map((car, index) => {
                    return (
                        <Car
                            /*для оптимизации передается key*/
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeTitle={this.changeTitleHandler.bind(this, car.name)}

                          /*  1. функция не создает своего контекста(стрелочные функции).*/
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                           /* 2. функция имеет свой контекст, мы его связали bindom с контекстом вскго класса App*/
                            onDelete={this.deleteHandler.bind(this, index)}
                        />

                    )
                })
                    : null
                }

                {/*<Car*/}
                {/*    name={cars[0].name}*/}
                {/*    year={cars[0].year}*/}
                {/*    //свое событие*/}
                {/*    onChangeTitle = {this.changeTitleHandler.bind(this, cars[0].name)}*/}
                {/*>*/}

                {/*    <p style={{color: "red"}}>Color</p>*/}
                {/*</Car>*/}
                {/*<Car*/}
                {/*    name={cars[1].name}*/}
                {/*    year={cars[1].year}*/}
                {/*    onChangeTitle = {() => this.changeTitleHandler(cars[1].name)}*/}
                {/*/>*/}

                {/*<Car*/}
                {/*    name={cars[2].name}*/}
                {/*    year={cars[2].year}*/}
                {/*    onChangeTitle = {() => this.changeTitleHandler(cars[2].name)}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;
