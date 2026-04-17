import React from 'react';
import { BiStats } from 'react-icons/bi';
import { LuClock3 } from 'react-icons/lu';
import { RiHome2Line } from 'react-icons/ri';
import logo from "/logo.png";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar flex-col md:flex-row container mx-auto'>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
                </div>
                <div className="flex gap-2 items-center">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            `font-semibold mx-1 p-2 ${isActive ? "text-white border bg-[#244D3F] rounded-md" : "text-gray-300"}`
                        }
                    >
                        <button className='flex gap-2 items-center'><RiHome2Line /> Home</button>
                    </NavLink>
                    <NavLink
                        to={"/timeline"}
                        className={({ isActive }) =>
                            `font-semibold mx-1 p-2 ${isActive ? "text-white border bg-[#244D3F] rounded-md" : "text-gray-300"}`
                        }
                    >
                        <button className='flex gap-2 items-center'><LuClock3 /> Timeline</button>
                    </NavLink>
                    <NavLink
                        to={"/stats"}
                        className={({ isActive }) =>
                            `font-semibold mx-1 p-2 ${isActive ? "text-white border bg-[#244D3F] rounded-md" : "text-gray-300"}`
                        }
                    >
                        <button className='flex gap-2 items-center'><BiStats /> Stats</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;