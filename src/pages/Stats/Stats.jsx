import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { timelineContext } from '../../Context/TimelineProvider';



const Stats = () => {

    const [storeChats] = useContext(timelineContext);

    const chatCount = storeChats.filter(chat => chat.type === "chat").length;
    const callCount = storeChats.filter(chat => chat.type === "call").length;
    const videoCount = storeChats.filter(chat => chat.type === "video").length;

    const data = [
        { name: 'Calls', value: callCount, fill: '#244D3F' },
        { name: 'Chats', value: chatCount, fill: '#7E35E1' },
        { name: 'Videos', value: videoCount, fill: '#37A163' },
    ];

    return (
        <div className='container mx-auto my-20 px-6 md:px-0'>
            <h1 className='font-bold text-[48px] text-[#1F2937] mb-6'>Friendship Analytics</h1>
            <div className='shadow-lg p-8  bg-white rounded-lg'>
                <h3 className='font-medium text-[20px] text-[#244D3F] mb-6'>By Interaction Type</h3>
                <div className='flex items-center justify-center'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                    <div className='flex items-center justify-center gap-6 mt-6'>
                        <div className='flex items-center gap-1'>
                            <div className='h-2 w-2 rounded-full bg-[#244D3F]'></div>
                            <p className='text-[#64748B] text-[14px] leading-5'>Calls: {callCount}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='h-2 w-2 rounded-full bg-[#7E35E1]'></div>
                            <p className='text-[#64748B] text-[14px] leading-5'>Chats: {chatCount}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='h-2 w-2 rounded-full bg-[#37A163]'></div>
                            <p className='text-[#64748B] text-[14px] leading-5'>Videos: {videoCount}</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Stats;