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
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img className='w-full' src={img1} alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img className='w-full' src={img2} alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img className='w-full' src={img3} alt="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;