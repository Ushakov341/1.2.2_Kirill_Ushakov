import './App.css';
import { carsList } from './cars.const';
import TableItem from './components/TableItem';
import './components/Table.css';


function App() {
  return (
    <>
    <div className="table">
    <div className="tableTitle">
      <div className="brand">Марка</div>
      <div className="price">Цена</div>
      <div className="year">Год</div>
      <div className="color">Цвет</div>
      <div className="order">Заказ</div>
    </div>
      <div className="tableRow">
      <TableItem />
      </div>
      </div>
    </>
  );
}

export default App;
