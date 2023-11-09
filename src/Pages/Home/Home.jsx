
import Banner from "../../Components/Banner/Banner";
import JobCategory from "../../Components/Job Category/JobCategory";
import ShowImage from "../../Components/showimage/ShowImage";
import State from "../../Components/State/State";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <ShowImage></ShowImage>
            <State></State>

        </div>
    );
};

export default Home;