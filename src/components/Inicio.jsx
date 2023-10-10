
import { useEffect, useState } from 'react';
import header from './../estilos/header.module.css';
import axios from 'axios';
import InicioMobile from './lnicioMobile';



export const Inicio = () => {

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
          {product.map(logo => (
            <div className={header.image} key={logo.id}>
              <img alt='logo manu' src={folder + logo.image}>
              </img></div>

          ))}
          <div className={header.line}></div>

          <div className={header.groupBtn}>
            <a href="/logo"><button className={header.btn1}>Logo Design

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button></a>


            <a href="/contact"><button className={header.btn2}>Contact</button></a>


            <a href="/photography"><button className={header.btn3}>Photography
              <span className={header.effect}></span></button></a>
          </div>

        </div>
      </div>
<div className="md:hidden">
  <InicioMobile/>
</div>

    </>
  )
}