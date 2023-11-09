import { useState } from 'react';

import img1 from '../../assets/63f45b0bc5077448350defd3_withmeta (1).jpg'
import img2 from '../../assets/WM2A9359.jpg'
import img3 from '../../assets/WM2A0218.jpg'


const Banner = () => {


    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // }
    return (
        <div className="carousel w-full mt-2">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 bottom-10 flex-col text-center top-3/4 justify-center items-center">
                    <h3 className='text-white text-3xl font-bold'>Geat Opportunity</h3>
                    <p className='text-white text-lg font-semibold'>Job opportunity means any established employment position which is currently vacant and left unfilled by a qualified worker</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 bottom-10 flex-col text-center top-3/4 justify-center items-center">
                    <h3 className='text-white text-3xl font-bold'>Geat Opportunity</h3>
                    <p className='text-white text-lg font-semibold'>Job opportunity means any established employment position which is currently vacant and left unfilled by a qualified worker</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 bottom-10 flex-col text-center top-3/4 justify-center items-center">
                    <h3 className='text-white text-3xl font-bold'>Geat Opportunity</h3>
                    <p className='text-white text-lg font-semibold'>Job opportunity means any established employment position which is currently vacant and left unfilled by a qualified worker</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;