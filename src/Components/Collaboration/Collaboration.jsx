import { motion } from "framer-motion"
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const Collaboration = () => {
    const descriptions = [{ title: "Free forever", subtitle: "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features." }, { title: "Easy integrations", subtitle: "Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace ." }, { title: "Security first", subtitle: "We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center ." }]
    return (
        <div className='max-w-[1280px] mx-auto' >
            <div className='relative py-20'>
                <h1 className="text-center text-5xl font-bold ">Collaborate without <br />
                    constraints</h1>
                <span className="text-black bg-yellow-400 px-2 right-[30%] top-0 rotate-12 font-semibold absolute rounded-xl">Your Idea Starts Here </span>
            </div>
            <div className='grid grid-cols-1  gap-10 md:grid-cols-2 xl:grid-cols-3'>
                {
                    descriptions.map((description, index) => <div className=' ' key={index}>
                        <h1 className='text-2xl font-bold mb-8'>{description.title}</h1>
                        <p className=''>{description.subtitle}</p>
                    </div>)
                }
            </div>
            <motion.button onTap={{ scale: 0.95 }} onHoverStart={{ scale: 1.5 }} className="xl:px-6 xl:py-2 mx-auto mt-20 py-2 px-3 hover:scale-105  transition duration-300 bg-background rounded-full flex items-center gap-1 text-white font-medium">Sign Up Free <HiOutlineArrowLongRight /></motion.button>
        </div>
    );
};

export default Collaboration;