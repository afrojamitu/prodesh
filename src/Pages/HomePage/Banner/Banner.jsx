import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/banner.png'
import brainIcon from '../../../assets/brain-icon.png'

const Banner = () => {
    return (
        <div className='bg-[#366582] md:h-[100vh] grid md:flex items-center overflow-hidden' >
            <div className='w-full mx-5 md:w-11/12 md:mx-auto pt-16 pr-5 md:py-10 grid md:grid-cols-2 items-center gap-10'>
                <div className=' w-full'>
                    <div className='space-y-4'>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Learn, earn and<br></br>succeed in career!</h1>
                        <p className='text-slate-200'>The university student's earnings are modest, often sourced from part-time jobs or internships. Balancing studies and work, they typically earn enough to cover basic expenses like textbooks, meals, and transportation. These earnings instill financial discipline and time management skills.</p>

                        <div className='mt-5 flex items-center gap-5'>
                            <Link to='/signup'
                                className='px-5 py-2 rounded-full bg-[#FF4802] border-2 border-[#FF4802] text-white font-bold hover:bg-transparent hover:text-[#FF4802]'
                            >
                                Join as Seller
                            </Link>

                            <Link to='/signup'
                                className='px-5 py-2 rounded-full bg-white border-2 border-white text-[#FF4802] font-bold hover:bg-transparent hover:text-white'
                            >
                                Join as Buyer
                            </Link>
                        </div>
                    </div>
                </div>


                <div className='w-full relative'>
                    <img className='w-full h-full' src={bannerImage} alt="" />

                    <div className='bg-white flex items-start gap-2 p-3 rounded shadow-md shadow-slate-400 absolute top-52 right-10'>
                        <img className='w-8' src={brainIcon} alt="" />
                        <div>
                            <h1 className="text-lg font-semibold">12k+ Students </h1>
                            <p>Working here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;