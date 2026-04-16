import React, { useContext } from 'react';
import { timelineContext } from '../../Context/TimelineProvider';

const Timeline = () => {

    const [storeChats] = useContext(timelineContext);

    return (
        <div className='max-w-300 mx-auto mt-20 min-h-screen space-y-6'>
            <div>
                <h2 className='text-[48px] font-bold text-[#1F2937]'>Timeline</h2>
                <details className="dropdown">
                    <summary className="btn m-1 p-4 rounded-md shadow-md text-[18px] text-[#64748B] border border-[#E5E7EB]">Filter Timeline</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>All</a></li>
                        <li><a>Calls</a></li>
                        <li><a>Messages</a></li>
                        <li><a>Videos</a></li>
                    </ul>
                </details>
            </div>
            {storeChats.map((chat, ind) => {
                const { type, link, name, time } = chat;

                return (
                    <div key={ind} className='flex items-center gap-4 p-4 shadow-md rounded-md space-y-6'>
                        <img src={link} alt="" className='w-6 h-6' />
                        <div>
                            <h2 className='font-semibold'>{name}</h2>
                            <p className='text-[12px] text-[#64748B]'>{time}</p>
                            <p className='text-[12px] text-[#64748B]'>{type}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;