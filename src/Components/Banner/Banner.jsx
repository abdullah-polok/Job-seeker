import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/63f45b0bc5077448350defd3_withmeta (1).jpg'
import img2 from '../../assets/WM2A9359.jpg'
import img3 from '../../assets/WM2A0218.jpg'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    return (
        <div className='mt-4' >
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <div className='relative'>
                        <img className='w-full ' src={img1} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute inset-0 bottom-10 flex-col text-center top-3/4 justify-center items-center">
                            <h3 className='text-white text-3xl font-bold'>Geat Opportunity</h3>
                            <p className='text-white text-lg font-semibold'>Job opportunity means any established employment position which is currently vacant and left unfilled by a qualified worker</p>
                        </div>
                    </div>
                    <Carousel.Caption>
                        {/* <div className='bg-stone-200'>
                            <h3 className='text-black font-semibold'>Geat Opportunity</h3>
                            <p className='text-black font-semibold'>Job opportunity means any established employment position which is currently vacant and left unfilled by a qualified worker</p>
                        </div> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <div className='relative'>
                        <img className='w-full ' src={img2} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute inset-0 bottom-10 flex-col text-center top-3/4 justify-center items-center">
                            <h3 className='text-white text-3xl font-bold'>Geat Opportunity</h3>
                            <p className='text-white text-lg font-semibold'>Job opportunity means any established employment position which is currently vacant and left unfilled by a qualified worker</p>
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <div className='relative'>
                        <img className='w-full ' src={img3} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute inset-0 bottom-10 flex-col text-center top-3/4 justify-center items-center">
                            <h3 className='text-white text-3xl font-bold'>Geat Opportunity</h3>
                            <p className='text-white text-lg font-semibold'>Job opportunity means any established employment position which is currently vacant and left unfilled by a qualified worker</p>
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;