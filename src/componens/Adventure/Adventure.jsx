import ad1 from '../../assets/1.png';
import ad2 from '../../assets/2.png';
import ad3 from '../../assets/3.png';
import back from '../../assets/back.jpg';
import { DiSizzlejs } from "react-icons/di";

const Adventure = () => {
    return (
        <div style={{ backgroundImage: `url(${back})` }} className='min-h-screen bg-no-repeat bg-cover w-full gap-7 -z-0 grid grid-cols-6 bg-opacity-10 pt-72 relative -top-52 pb-10'>
            <div className='col-span-2'>
                <img className='rounded-lg' src={ad1} alt="" />
                <div className='w-10/12 ml-auto'>
                    <p className='text-xs font-medium text-white mt-10 mb-6'>While some of the company’s customers might be traveling within Colombia, they’ve clearly determined that many of their tour attendees come from English-speaking countries.</p>
                    <button className='bg-white z-10 flex items-center hover:bg-black hover:text-white text-black  rounded-full px-6 py-3 text-xs font-semibold '>Explore Now <DiSizzlejs className='text-lg' /></button>
                </div>
            </div>
            <div className='col-span-3'>
                <div className=''>
                    <h4 className='text-3xl font-bold text-[#f3faff]'>Time for an adventure</h4>
                    <p className='text-xs font-medium text-white my-5'>And while the photos are likely what initially draw readers in, what sets this site apart from others is the personal perspective. You can tell that this site was made out of a passion for traveling.</p>

                    <div className=' w-11/12 ml-auto'>
                        <p className='text-xs  font-medium text-white'>Best of all, everything is easily accessible from the big menu bar. Given that the site is designed to provide information about very distinct categories, it’s essential that visitors can immediately find what they’re looking for.</p>
                        <button className='bg-white  flex items-center hover:bg-black hover:text-white text-black my-4 rounded-full px-6 py-3 text-xs font-semibold '>Explore Now <DiSizzlejs className='text-lg' /></button>
                    </div>
                </div>
                <div className='w-[80%]'>
                    <img className='rounded-lg' src={ad2} alt="" />
                </div>
            </div>
            <div>
                <img className='rounded-lg' src={ad3} alt="" />
            </div>
        </div>
    );
};

export default Adventure;