import './App.scss';
import React, {Component} from "react";
import Car from "./Car/Car";

class App extends Component {
    //Состояние элемента
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
            cars: cars
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

        // вешаем обработчик события
        // https://ru.reactjs.org/docs/events.html

        let cars = null;
        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        //для оптимизации передается key

                        //props name year onChangeTitle onChangeName onDelete
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={this.changeTitleHandler.bind(this, car.name)}

                        //1. функция не создает своего контекста(стрелочные функции)
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                        //2. функция имеет свой контекст, мы его связали bindom с контекстом вскго класса App*/
                        onDelete={this.deleteHandler.bind(this, index)}
                    />
                )
            })
        }

        return (
            <div style={divStyle}>
                <h1>
                    {this.state.pageTitle}
                </h1>
                <button onClick={this.toggleCarsHandler}>Toggle cars</button>

                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {cars}
                </div>
            </div>
        );
    }
}

export default App;
