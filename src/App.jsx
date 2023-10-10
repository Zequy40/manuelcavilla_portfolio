
import { useEffect, useState } from 'react';
import './App.css'

import header from './estilos/header.module.css';

import {Link} from 'react-router-dom';
import axios from 'axios';
import InicioAppMobile from './components/InicioAppMobile';

function App() {


  const [product, setProduct] = useState([])
      const folder = '/logo/'
      useEffect(() => {
          axios.get('https://manuelcavilla.com/apiLogo.php').then(response => {
              setProduct(response.data)
          })
              .catch(error => {
                  console.error('Error al descargar los productos:', error);
              })
  
      }, []);

  return (
    <>
       <div className="max-md:hidden">
        <div className={header.container}>
        {product.map(logo=>(
          <div className={header.image} key={logo.id}>
            <img  alt='logo manu' src={folder + logo.image}>
            </img></div>
            ))}
          <div className={header.line}></div>

          <div className={header.groupBtn}>
            <Link to="/logo"><button className={header.btn1}>Logo Design

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button></Link>


            <Link to="/contact"><button className={header.btn2}>Contact</button></Link>


            <Link to="/menu-photography"><button className={header.btn3}>Photography
              <span className={header.effect}></span></button></Link>
          </div>

        </div>
      </div>

      <div className="md:hidden">
        <InicioAppMobile/>
      </div>
    </>
  )
}

export default App
