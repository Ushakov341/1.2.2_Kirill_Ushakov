import { carsList } from "../cars.const"

function TableItem() {
    return (
        <>
        {carsList.map((car)=>(
            <>
        <div className="brandCar">{car.brand} {car.model}</div>
        <div className="priceCar">{car.price} {car.сurrency}</div>
        <div className="yearCar">{car.year}</div>
        <select className="colorCar">
            <option className='colorSwitch'></option>
        </select>
        <button className = 'button'>Забронировать</button>
            </>
        ))}
        
        </>
    )
}

export default TableItem