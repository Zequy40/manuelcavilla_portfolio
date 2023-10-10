import photo from './../estilos/photo.module.css';
import axios from "axios";
import { useEffect, useState } from "react";


export default function PhotographyMobile() {

    const [product, setProduct] = useState([])
    const folder = '/images/'
    useEffect(() => {
      axios.get('https://manuelcavilla.com/api-image.php').then(response => {
        setProduct(response.data)
      })
        .catch(error => {
          console.error('Error al descargar los productos:', error);
        })
  
    }, []);

  return (
    <>
    <div className="w-full">
    {product.map(foto=>(
    <div className={photo.containerMobile} key={foto.id}>
        <div className={photo.galleryMobile}>
            <div className={photo.normalMobile}>
                <img src={folder + foto.images} className={photo.smallMobile}
                    alt="image" />

                <img src={folder + foto.imgPortrait} className={photo.smallMobile}
                    alt="manuel" />
            </div>
            <img src={folder + foto.imgLandscape} className={photo.smallMobile}
                alt="bl" />
        </div>
        <div className={photo.galleryMobile}>
            <img src={folder + foto.imgLandscape2} className={photo.smallMobile}
                alt="zeki" />
            <div className={photo.normalMobile}>
                <img src={folder + foto.imgPortrait2} className={photo.smallMobile}
                    alt="image" />

                <img src={folder + foto.imgPortrait3} className={photo.smallMobile}
                    alt="image" />
            </div>
        </div>
    </div>
    ))}

  
</div>
    </>
  )
}
