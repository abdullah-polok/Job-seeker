import './showimage.css'
import { motion } from "framer-motion";
import images from "../../image";
const ShowImage = () => {
    return (
        <div className='mt-24'>
            <motion.div className="carousel">
                <motion.div>
                    <div className='grid grid-cols-4 gap-4  '>
                        {images.map((image) => {
                            console.log(image)
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    // whileTap={{ scale: 2 }}
                                    key={image}
                                >
                                    <img className='w-[400px] rounded-xl' src={image} alt="image" />
                                </motion.div>

                            );

                        })}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ShowImage;