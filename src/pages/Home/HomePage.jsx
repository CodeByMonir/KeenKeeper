import React, { Suspense } from 'react';
import { FiPlus } from 'react-icons/fi';
import CardX from '../../components/items/CardX';

const HomePage = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className='text-center mb-10'>
                <h1 className='text-[#1F2937] font-bold text-[48px]'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] mt-4 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br/>relationships that matter most.</p>
                <div className='flex items-center justify-center'><button className='flex items-center justify-center text-white gap-1 font-semibold bg-[#244D3F] rounded-md py-3 px-4'><FiPlus />Add a friend</button></div>
            </div>
            <div>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='p-8 shadow-lg space-y-2 text-center rounded-md bg-white'>
                        <span className='text-[#244D3F] font-semibold text-[32px]'>10</span>
                        <p className='text-[#64748B] text-[18px]'>Total Friends</p>
                    </div>
                    <div className='p-8 shadow-lg space-y-2 text-center rounded-md bg-white'>
                        <span className='text-[#244D3F] font-semibold text-[32px]'>3</span>
                        <p className='text-[#64748B] text-[18px]'>On Track</p>
                    </div>
                    <div className='p-8 shadow-lg space-y-2 text-center rounded-md bg-white'>
                        <span className='text-[#244D3F] font-semibold text-[32px]'>6</span>
                        <p className='text-[#64748B] text-[18px]'>Need Attention</p>
                    </div>
                    <div className='p-8 shadow-lg space-y-2 text-center rounded-md'>
                        <span className='text-[#244D3F] font-semibold text-[32px]'>12</span>
                        <p className='text-[#64748B] text-[18px]'>Interactions This Month</p>
                    </div>
                </div>
                <div>
                    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
                        <span className="loading loading-spinner text-success"></span>
                    </div>}>
                        <CardX/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default HomePage;