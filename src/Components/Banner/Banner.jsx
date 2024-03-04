import RightSideBanner from "./RightSideBanner";


const Banner = () => {
    return (
        <div className="flex gap-28 lg:flex-row flex-col  mt-20 justify-items-center justify-center  items-center">
            <RightSideBanner />
            <div className="">
                <img src="https://i.ibb.co/Bj1MqpP/headerimage-without-text-png.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;