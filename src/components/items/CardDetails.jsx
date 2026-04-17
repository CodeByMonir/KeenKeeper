import React from 'react';

const CardDetails = ({ data }) => {
    return (
        <div className="p-6 flex flex-col items-center gap-3 rounded-md shadow-md text-center bg-white">
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
            <div className='flex gap-2'>
                {data.tags.map((tag, ind) => {
                    return (
                        <p key={ind} className="bg-[#CBFADB] py-1 px-2 text-[#244D3F] text-[12px] font-medium rounded-lg">{tag}</p>
                    );
                })}
            </div>
            <p className={`py-1 px-2 rounded-lg font-medium text-[12px] text-white ${data.status == "overdue" ? "bg-[#EF4444]" : data.status == "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}>{data.status}</p>
        </div>
    );
};

export default CardDetails;