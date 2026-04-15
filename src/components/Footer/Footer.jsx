import React from 'react';
import logoLg from "../../assets/logo-xl.png"
import ins from "../../assets/instagram.png"
import fbl from "../../assets/facebook.png"
import xl from "../../assets/twitter.png"

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-8'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <span className='flex items-center justify-center'><img src={logoLg} alt="Keen Keeper Logo" /></span>
                    <p className='text-white leading-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='mt-6 mb-10 space-y-4'>
                        <h3 className='text-white font-medium text-[20px] leading-5'>Social Links</h3>
                        <div className='flex gap-3 items-center justify-center'>
                            <img src={ins} alt="" />
                            <img src={fbl} alt="" />
                            <img src={xl} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center text-[#FAFAFA] leading-6 pt-8 border-t border-[#FAFAFA]'>
                    <p>© 2026 KeenKeeper. All rights reserved. </p>
                    <ul className='flex gap-10 items-center '>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;