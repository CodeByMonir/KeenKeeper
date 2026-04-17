import React, { useContext, useState } from 'react';
import { timelineContext } from '../../Context/TimelineProvider';

const Timeline = () => {

    const [storeChats] = useContext(timelineContext);
    const [filterType, setFilterType] = useState("all");

    
    const handleFilter = (type) => {
        setFilterType(type);
    };

    const getFilteredChats = () => {
        let chats = [...storeChats];

        if (filterType === "call" || filterType === "chat" || filterType === "video") {
            chats = chats.filter(chat => chat.type === filterType);
        }

        if (filterType === "date") {
            chats.sort((a, b) => new Date(b.time) - new Date(a.time));
        }

        return chats;
    };

    const filteredChats = getFilteredChats();

    return (
        <div className='max-w-300 mx-auto my-20 min-h-screen space-y-6'>
            <div>
                <h2 className='text-[48px] font-bold text-[#1F2937]'>Timeline</h2>

                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    Filter timeline
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                    <li onClick={() => handleFilter("all")}><a>All</a></li>
                    <li onClick={() => handleFilter("date")}><a>Date</a></li>
                    <li onClick={() => handleFilter("call")}><a>Calls</a></li>
                    <li onClick={() => handleFilter("chat")}><a>Messages</a></li>
                    <li onClick={() => handleFilter("video")}><a>Videos</a></li>
                </ul>
            </div>

            {filteredChats.map((chat, ind) => {
                const { link, contact, name, time } = chat;

                return (
                    <div
                        key={ind}
                        className='flex items-center gap-4 p-4 shadow-md rounded-md'
                    >
                        <div>
                            <img src={link} alt="" className='w-8 h-8' />
                        </div>

                        <div>
                            <p>
                                <span className='font-medium text-[20px] text-[#244D3F]'>
                                    {contact}
                                </span>{" "}
                                with {name}
                            </p>
                            <p className='text-[12px] text-[#64748B]'>{time}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;