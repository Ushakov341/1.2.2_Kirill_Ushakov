function TableItem() {
    return (
        <>
        <div className="brandCar">Toyota Corolla</div>
        <div className="priceCar">2000 BYN</div>
        <div className="yearCar">2010</div>
        <select className="colorCar">
            <option className='colorRed'>Красный</option>
            <option className='colorBlue'>Синий</option>
            <option className='colorOrange'>Оранжевый</option>
            <option className='colorWhite'>Белый</option>
            <option className='colorGray'>Серый</option>
        </select>
        <button className = 'button'>Забронировать</button>
        </>
    )
}

export default TableItem