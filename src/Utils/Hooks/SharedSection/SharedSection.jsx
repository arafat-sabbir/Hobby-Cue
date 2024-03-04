import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {PropTypes} from "prop-types"


const SharedSection = ({ title, description, image }) => {
    return (
        <>
            <div>
                <h1 className="title mb-6">{title?.split(",")[0]} <br /> {title?.split(",")[1]} </h1>
                <p className="max-w-[453px]">{description}</p>
                <span className="flex mt-10 text-blue-500 items-center  gap-1 underline">Learn More <HiOutlineArrowLongRight /></span>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </>
    );
};

export default SharedSection;

SharedSection.propTypes = {
    title: PropTypes.string, description: PropTypes.string, image: PropTypes.string
}