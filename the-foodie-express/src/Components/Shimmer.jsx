import React from 'react'

const ShimmerCard = () => {
    return (
        <div className='w-[250px] h-96 gap-1 flex flex-col transition-all'>
            <div className='w-[230px] h-48 rounded-2xl bg-[#8c8f8f]' ></div>
            <div className='w-[50px] h-10 rounded-2xl bg-[#8c8f8f]'></div>
            <div className='w-[40px] h-5 rounded-2xl bg-[#8c8f8f]'></div>
            <div className='w-[40px] h-5 rounded-2xl bg-[#8c8f8f]'></div>
        </div>
    )
}
const Shimmer = () => {
    return (
        <div className='flex justify-center mt-10 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[50%]'>
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />

        </div>
    )
}

export default Shimmer
