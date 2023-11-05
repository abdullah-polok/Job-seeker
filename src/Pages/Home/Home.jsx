

import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import JobCategory from "../../Components/Job Category/JobCategory";
import Navber from "../../Components/Navber/Navber";

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;