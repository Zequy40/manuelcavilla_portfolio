

import { Header } from './Header';
import { FooterMobile } from './FooterMobile';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

//import PhotographyMobile from './PhotographyMobile';


export const MenuPhotography = () => {


    return (
        <>
            <Header />

            <div className="max-w-[1212px]  m-auto py-5">
                    <div className="w-full py-5 my-10 flex flex-col items-center justify-center text-3xl">
                        <div className="py-5 transition-all">
                            <Link to="/photography"><button className="relative group">Photography
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-black origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                        <div className="py-5">
                            <Link to="#"><button className="relative disabled:opacity-50" disabled>Street photography
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-black origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                        <div className="py-5">
                            <Link to="#"><button className="relative disabled:opacity-50" disabled>Portrait
                            <span className='absolute -bottom-2 left-0 w-0 h-1 bg-black origin-bottom-left transition-all group-hover:w-full '></span></button></Link>
                        </div>
                    </div>
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
