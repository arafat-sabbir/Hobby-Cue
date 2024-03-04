import { HiOutlineArrowLongRight } from "react-icons/hi2";

const WorkTogether = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="title mb-6">Work together, <br /> wherever you work</h1>
                <p>In the office, remote, or a mix of the two, with Miro, <br /> your team can connect, collaborate, and co-create in <br /> one space no matter where you are.</p>
                <span className="flex mt-10 text-blue-500 items-center  gap-1 underline">Learn More <HiOutlineArrowLongRight /></span>
            </div>
            <div>
                <img src="https://i.ibb.co/N70J6QB/hybridwork-png.png" alt="" />
            </div>
        </div>
    );
};

export default WorkTogether;