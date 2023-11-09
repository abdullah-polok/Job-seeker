import Aboutus from "../../Components/About us/Aboutus.jsx/Aboutus";
import Banner from "../../Components/Banner/Banner";
import JobCategory from "../../Components/Job Category/JobCategory";
import State from "../../Components/State/State";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <State></State>
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;