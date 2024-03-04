import { HiOutlineArrowLongRight } from "react-icons/hi2";

const RightSideBanner = () => {
    return (
        <div>
            <h1 className="title">Take ideas from <br /> better to best</h1>
            <p className="my-5">Miro is your teams visual platform to connect, to get the <br /> collaborate, and create — together.</p>
            <input type="text" placeholder="Enter your work email" className="my-2 rounded-full border border-gray-300 w-full py-2 focus:outline-none px-6" />
            <button className="signUpBtn mb-2">Sign Up Free <HiOutlineArrowLongRight /></button>
            <p>Collaborate with your team within minutes</p>
            <img src="https://i.ibb.co/bvgdQkw/div.png" className="w-2/3 mt-8" alt="" />
        </div>
    );
};

export default RightSideBanner;