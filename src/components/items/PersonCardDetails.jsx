import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import call from "../../assets/PhoneCall.png"
import chat from "../../assets/ChatDots.png"
import video from "../../assets/VideoCamera.png"

const PersonCardDetails = ({ data }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto mt-20 gap-6'>
            <div className=''>
                <div className="p-6 flex flex-col items-center gap-3 rounded-md shadow-md text-center">
                    <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden shadow-xl">
                        <img
                            src={data.picture}
                            alt=""
                        />
                    </div>
                    <div>
                        <div className='gap-2'>
                            <h2 className='text-[#1F2937] font-semibold text--[20px]'>{data.name}</h2>
                            <p className='text-[12px] text-[#64748B]'>{data.days_since_contact}d ago</p>
                        </div>
                    </div>
                    <p className={`py-1 px-2 rounded-lg font-medium text-[12px] text-white ${data.status == "overdue" ? "bg-[#EF4444]" : data.status == "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}>{data.status}</p>
                    <div className='flex gap-2'>
                        {data.tags.map((tag, ind) => {
                            return (
                                <p key={ind} className="bg-[#CBFADB] py-1 px-2 text-[#244D3F] text-[12px] font-medium rounded-lg">{tag}</p>
                            );
                        })}
                    </div>
                    <p className='font-medium text-[#64748B]'>{data.bio}</p>
                    <p className='text-[#64748B] text-[14px]'>{data.email}</p>
                </div>
                <div>
                    <p className='font-medium text-[#1F2937] flex items-center justify-center gap-2 p-4 shadow-md'><RiNotificationSnoozeLine /> Snooze 2 Weeks</p>
                    <p className='font-medium text-[#1F2937] flex items-center justify-center gap-2 p-4 shadow-md'><FiArchive /> Archive</p>
                    <p className='font-medium text-[#EF4444] flex items-center justify-center gap-2 p-4 shadow-md'><RiDeleteBin5Line /> Delete</p>
                </div>
            </div>
            <div className='col-span-2 space-y-6'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <p className='flex flex-col text-center rounded-md text-[18px] text-[#64748B] py-8 px-4 space-y-2 shadow-md'><span className='font-semibold text-[30px] text-[#244D3F]'>{data.days_since_contact}</span> Days Since Contact</p>

                    <p className='flex flex-col text-center rounded-md text-[18px] text-[#64748B] py-8 px-4 space-y-2 shadow-md'><span className='font-semibold text-[30px] text-[#244D3F]'>{data.goal}</span> Goal (Days)</p>
                    
                    <p className='flex flex-col text-center rounded-md text-[18px] text-[#64748B] py-8 px-4 space-y-2 shadow-md'><span className='font-semibold text-[30px] text-[#244D3F]'>{data.next_due_date}</span> Next Due</p>
                </div>

                <div className='p-6 shadow-md rounded-md'>
                    <div className='flex justify-between'>
                        <p className='font-medium text-[20px] text-[#244D3F]'>Relationship Goal</p>
                        <button className='btn'>Edit</button>
                    </div>
                    <p className='flex items-center rounded-md text-[18px] text-[#64748B] space-y-2 gap-2'>Connect every <span className='font-bold text-[18px] text-[#244D3F]'>{data.goal} days</span></p>
                </div>

                <div>
                    <h3 className='font-medium text-[20px] text-[#244D3F]'>Quick Check-In</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                        <button className='p-4 flex flex-col items-center gap-2 rounded-md shadow-md bg-[#F8FAFC]'><img src={call} alt="Call" /> Call</button>
                        <button className='p-4 flex flex-col items-center gap-2 rounded-md shadow-md bg-[#F8FAFC]'><img src={chat} alt="Chat" /> Text</button>
                        <button className='p-4 flex flex-col items-center gap-2 rounded-md shadow-md bg-[#F8FAFC]'><img src={video} alt="" /> Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonCardDetails;