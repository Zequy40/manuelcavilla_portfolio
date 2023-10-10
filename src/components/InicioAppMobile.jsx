import { useEffect, useState } from 'react';

import header from './../estilos/header.module.css';

import {Link} from 'react-router-dom';
import axios from 'axios';

export default function InicioAppMobile() {

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
        <div className="w-full">
        <div className={header.containerMobile}>
          <div className={header.contactMailMobile}>
          {product.map(logo=>(
            <div className={header.contactBackMobile} key={logo.id}>
            <img alt='logo manu' className={header.imgLogo} src={folder + logo.image}></img>
            </div>
            ))}
              <div className={header.containerImgMobile}>
                <div className={header.emailMobile}>
                <Link to="/logo"><button className={header.btnMobile}>Logo Design</button></Link>
                </div>

                <div className={header.emailMobile}>
                  
                <Link to="/contact"><button className={header.btnMobile}>Contact</button></Link>
                </div>

                <div className={header.emailMobile}>
                  
                <Link to="/photography"><button className={header.btnMobile}>Photography</button></Link>
                </div>
              </div>

            
          </div>
        </div>
      </div>
    </>
  )
}
