import React from "react";
import { render } from "react-dom"
import Car, { CarData } from "./car";
const cars = [{
        name: "Kia",
        year: "2016",
        make: "Sorento",
        reg: "1AE123"
    }, {
        name: "Car Name",
        year: "2000",
        make: "Bob",
        reg: "ABC246"
    },{
        name: "Honda",
        year: "2005",
        make: "Accord",
        reg: "ABC123"
    }
]
function App(){


return(
<div className="main-container">
    <div className="page">
        <div className="body">
            <div className="header">        
                <div className="car-name">Name</div>
                <div className="car-year">Year</div>
                <div className="car-make">Make</div>
                <div className="car-reg">Reg</div>
            </div>
            <div className="car-list">
                {cars.map((car, index) => (<Car name={car.name} year={car.year} make={car.make} reg={car.reg}                 ></Car>))}
            </div>
        </div>
        <div className="footer" id="footer">Footer</div></div>

</div>);
}
render(<App/>,document.getElementById("app"))