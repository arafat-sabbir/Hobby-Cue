import Banner from "../../Components/Banner/Banner";
import Collaboration from "../../Components/Collaboration/Collaboration";
import Connect from "../../Components/Connect/Connect";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TrustedBy from "../../Components/TrustedBy/TrustedBy";
import WorkTogether from "../../Components/WorkTogether/WorkTogether";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <Banner />
                <TrustedBy />
                <Collaboration />
                <WorkTogether />
                <Connect />
                <div className="mt-20">
                    <img className="mx-auto" src="https://i.ibb.co/pjFzSSp/section.png" alt="" />
                </div>
            </div>
            <div className="bg-[#02033B]">
                <Footer />
            </div>
        </div>
    );
};

export default Home;