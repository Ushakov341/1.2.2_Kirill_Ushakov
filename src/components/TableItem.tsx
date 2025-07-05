import React from 'react';
import { carsList } from "../cars.const"

function TableItem() {
    return (
        <>
            {carsList.map((car, index) => (
                <div className="tableRow" key={index}>
                    <div className="brandCar">{car.brand} {car.model}</div>
                    <div className="priceCar">{car.price} {car.currency}</div>
                    <div className="yearCar">{car.year}</div>
                    <select className="colorCar">
                        {car.color.map((c, i) => (
                            <option key={i} value={c}>{c}</option>
                        ))}
                    </select>
                    <button className="button">Забронировать</button>
                </div>
            ))}
        </>
    );
}

export default TableItem;