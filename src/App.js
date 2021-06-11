import './App.css';
import Navegation from './components/Navegation/Navegation';
import Header from './components/Header/Header';
import CartWidget from './components/CarWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
      <div>
        <CartWidget/>
        <Header/>
        <Navegation/>
        <ItemListContainer title={'Articulo 1 a la venta'}/>
        <ItemListContainer title={'Articulo 2 a la venta'}/>
        <ItemListContainer title={'Articulo 3 a la venta'}/>
        <ItemListContainer title={'Articulo 4 a la venta'}/>

      </div>
   
  );
}

export default App;
