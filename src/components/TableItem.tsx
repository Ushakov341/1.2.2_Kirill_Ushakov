import { carsList } from "../cars.const"

function TableItem() {
    return (
        
        {carsList.map((car) => (
        <div className="tableRow">
            <div className="brandCar">{car.brand} {car.model}</div>
            <div className="priceCar">{car.price} {car.сurrency}</div>
            <div className="yearCar">{car.year}</div>
            <select className="colorCar">
                <option className='colorRed'>Красный</option>
            </select>
        <button className = 'button'>Забронировать</button>
        </div>
        ))}
    )
}
export default TableItem