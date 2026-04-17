import React, { use } from 'react';
import CardDetails from './CardDetails';
import { Link } from 'react-router';

const dataPromise = fetch("/data.json").then((res) => res.json());

const CardX = () => {

    const data = use(dataPromise);

    return (
        <div className='container mx-auto border-t border-gray-200 mt-10 pt-10'>

            <p className='text-[#1F2937] font-semibold text-[24px]'>Your Friends</p>

            <div className='my-4 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                {data.map((data, ind) => {
                    return (
                        <Link
                            to={`/friend/${data.name}`}
                            key={ind}
                        >
                            <CardDetails data={data} key={ind} />
                        </Link>
                    );
                })};

            </div>
        </div>
    );
};

export default CardX;