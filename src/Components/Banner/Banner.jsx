import RightSideBanner from "./RightSideBanner";


const Banner = () => {
    return (
        <div className="flex xl:flex-row w-full  justify-between flex-col  mt-20 justify-items-center  items-center">
            <RightSideBanner />
            <div className="">
                <img src="https://i.ibb.co/Bj1MqpP/headerimage-without-text-png.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;