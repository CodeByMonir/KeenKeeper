import React, { useContext } from 'react';
import { timelineContext } from '../../Context/TimelineProvider';

const Timeline = () => {

    const [storeChats] = useContext(timelineContext);

    return (
        <div className='max-w-300 mx-auto my-20 min-h-screen space-y-6'>
            <div>
                <h2 className='text-[48px] font-bold text-[#1F2937]'>Timeline</h2>
                <details className="dropdown">
                    <summary className="btn m-1 p-4 rounded-md shadow-md text-[18px] text-[#64748B] border border-[#E5E7EB]">Filter Timeline</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#64748B]">
                        <li><a>All</a></li>
                        <li><a>Calls</a></li>
                        <li><a>Messages</a></li>
                        <li><a>Videos</a></li>
                    </ul>
                </details>
            </div>
            {storeChats.map((chat, ind) => {
                const { link, contact, name, time } = chat; 

                return (
                    <div key={ind} className='flex items-center gap-4 p-4 shadow-md rounded-md space-y-6'>
                        <div>
                            <img src={link} alt="" className='w-8 h-8 mt-5' />
                        </div>
                        <div>
                            <p><span className='font-medium text-[20px] text-[#244D3F]'>{contact}</span> with {name}</p>
                            <p className='text-[12px] text-[#64748B]'>{time}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;