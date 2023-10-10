
import photo from './../estilos/photo.module.css';
import { Header } from './Header';
import { FooterMobile } from './../components/FooterMobile';
import { Footer } from './../components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PhotographyMobile from './PhotographyMobile';
// import img1 from './../../public/images/img-00361.png';
// import img2 from './../../public/images/img-01331.png';
// import img3 from './../../public/images/img-02361.png';
// import img4 from './../../public/images/img-06241.png';
// import img5 from './../../public/images/img-06361.png';
// import img6 from './../../public/images/img-07521.png';


export const Photography = () => {

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
    <Header/>
        <div className="max-md:hidden">
           {product.map(foto => (
            <div className={photo.container} key={foto.id}>
           
                
                <div className={photo.gallery} >
                    <div className={photo.normal}>
                        <img src={folder + foto.images} className={photo.small}
                            alt="image" />

                        <img src={folder + foto.imgPortrait} className={photo.small}
                            alt="manuel" />
                    </div>
                    <img src={folder + foto.imgLandscape} className={photo.large}
                        alt="bl" />
                </div>
                <div className={photo.gallery}>
                    <img src={folder + foto.imgLandscape2} className={photo.large}
                        alt="zeki" />
                    <div className={photo.normal}>
                        <img src={folder + foto.imgPortrait2} className={photo.small}
                            alt="image" />

                        <img src={folder + foto.imgPortrait3} className={photo.small}
                            alt="image" />
                    </div>
                
                </div>
          
            </div>
           ))}
            
           
            </div>
            <div className="md:hidden">
                <PhotographyMobile/>
            </div>
         
        <div className="max-md:hidden">
                        <Footer/>
                </div>
                <div className="w-full  md:hidden">
               <FooterMobile/>
            </div>
        </>
  )
}
