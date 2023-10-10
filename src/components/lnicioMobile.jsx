
import { useEffect, useState } from 'react';
import header from './../estilos/header.module.css';
import axios from 'axios';


export default function InicioMobile() {

    const [product, setProduct] = useState([])
    const folder = '/logo/'
    useEffect(() => {
        axios.get('https://manuelcavilla.com/api.php').then(response => {
            setProduct(response.data)
        })
            .catch(error => {
                console.error('Error al descargar los productos:', error);
            })

    }, []);

    return (
        <div className="w-full">
            <div className={header.containerMobile}>
                <div className={header.contactMailMobile}>
                    {product.map(logo => (
                        <div className={header.contactBackMobile} key={logo.id}>
                            <img alt='logo manu' className={header.imgLogo} src={folder + logo.image}></img>
                        </div>
                    ))}
                    <div className={header.containerImgMobile}>
                        <div className={header.emailMobile}>
                            <a href="/logo"><button className={header.btnMobile}>Logo Design</button></a>
                        </div>

                        <div className={header.emailMobile}>

                            <a href="/contact"><button className={header.btnMobile}>Contact</button></a>
                        </div>

                        <div className={header.emailMobile}>

                            <a href="/photography"><button className={header.btnMobile}>Photography</button></a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
