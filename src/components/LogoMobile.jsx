
import { useState, useEffect } from 'react'
import axios from 'axios'

export const LogoMobile = () => {
    const [product, setProduct] = useState([])
    const folder = '/images/'
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
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                {product.map(products => (

                    <ul role="list" className="divide-y divide-gray-100" key={products.id}>


                        <li className="flex justify-between  gap-x-1 py-5" >

                            <div className="flex flex-col gap-x-4 items-start">

                                <img className="h-[150px] w-[150px] flex-none" src={folder + products.image} alt="" />
                                <div className="min-w-0 flex-auto items-center">
                                    <p className="mt-1 text-lg italic font-bold leading-5 pb-5  text-black">Business name: <span className="capitalize">{products.name}</span></p>

                                    <p className="mt-1 text-lg leading-5 text-black">{products.description}</p>

                                </div>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>

        </div>
    )
}
