

import { Header } from './Header';
import { FooterMobile } from './../components/FooterMobile';
import { Footer } from './../components/Footer';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { LogoMobile } from './LogoMobile';

export const Logo = () => {
 const [product, setProduct] = useState([])
const folder = '/images/'
 useEffect(()=>{
  axios.get('https://manuelcavilla.com/api.php').then(response => {
    setProduct(response.data)
  })
  .catch(error => {
    console.error('Error al descargar los productos:', error);
  })

}, []);
  return (
    <>
      <Header />
      <div className="max-md:hidden">


        <div className="max-w-[1280px] m-auto">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
{product.map(products => (

            <ul role="list" className="divide-y divide-gray-100" key={products.id}>


              <li className="flex justify-between w-full gap-x-6 pt-2" >

                <div className="flex gap-x-4 items-center">

                  <img className="scale-50 max-w-150 flex-none" src={folder + products.image} alt="" />
                  <div className=" flex-auto gap-2 items-center">
                    <p className="mt-1 text-lg italic font-bold leading-4 pb-5  text-black">Business name: <span className=" capitalize leading-10 text-2xl font-normal">{products.name}</span></p>

                    <p className="mt-1 text-lg leading-6 text-black">{products.description}</p>

                  </div>
                </div>

              </li>


            </ul>
))}

          </div>

        </div>

      </div>
      <div className="md:hidden">
        <LogoMobile/>
      </div>
    
      <div className="max-md:hidden">
        <Footer />
      </div>
      <div className="w-full  md:hidden">
        <FooterMobile />
      </div>
    </>
  )
}
