import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Banner />
            </div>
        </div>
    );
};

export default Home;