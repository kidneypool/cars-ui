import React from "react"
export interface CarData{name: string, year: string, make: string, reg: string}
export default function Car(props: CarData){
    return (<div className="car-property">
        <div className="car-name">{props.name}</div>
        <div className="car-year">{props.year}</div>
        <div className="car-make">{props.make}</div>
        <div classname="car-reg">{props.reg}</div>
    </div>)
}
