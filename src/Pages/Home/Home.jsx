import Banner from "../../Components/Banner/Banner";
import Collaboration from "../../Components/Collaboration/Collaboration";
import Navbar from "../../Components/Navbar/Navbar";
import TrustedBy from "../../Components/TrustedBy/TrustedBy";
import WorkTogether from "../../Components/WorkTogether/WorkTogether";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <Banner />
                <TrustedBy />
                <Collaboration />
                <WorkTogether />
            </div>
        </div>
    );
};

export default Home;