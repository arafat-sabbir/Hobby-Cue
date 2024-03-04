import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import TrustedBy from "../../Components/TrustedBy/TrustedBy";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Banner />
                <TrustedBy/>
            </div>
        </div>
    );
};

export default Home;