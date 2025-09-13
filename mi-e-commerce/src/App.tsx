import { ProductProvider } from './assets/components/context/ProductContext';
import Products from '../src/assets/components/pages/Products';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <header className="app-header">
          <h1>GlobMatic  <h4>E-commerce</h4></h1>

          <p>ONLINE STORE</p>
          
          <p>Descubre nuestra selección de productos de alta calidad</p>


        </header>
        <div className="container">
          <Products />

        </div>
        <footer className="app-footer">
          <p>© 2023 GlobMatic - Todos los derechos reservados</p>
        </footer>
      </div>
    </ProductProvider>
  );
}

export default App;