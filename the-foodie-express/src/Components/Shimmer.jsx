import React from 'react'

const ShimmerCard = () => {
    return (


        <div className='w-[250px] h-96 gap-2 flex flex-col transition-all'>
            <div className='w-[230px] h-48  bg-[#d3d5d5]' ></div>
            <div className='w-[200px] h-3   bg-[#d3d5d5]'></div>
            <div className='w-[40px] h-3  bg-[#d3d5d5]'></div>
        </div>

    )
}
const Shimmer = () => {
    return (
        <div className='flex flex-col gap-5 mt-16'>  <div className='flex justify-center gap-10 mt-10'>
            <div className='w-28 aspect-square rounded-full bg-[#d3d5d5]'></div>
            <div className='w-28 aspect-square rounded-full bg-[#d3d5d5]'></div>
            <div className='w-28 aspect-square rounded-full bg-[#d3d5d5]'></div>
            <div className='w-28 aspect-square rounded-full bg-[#d3d5d5]'></div>
            <div className='w-28 aspect-square rounded-full bg-[#d3d5d5]'></div>
            <div className='w-28 aspect-square rounded-full bg-[#d3d5d5]'></div>
        </div>
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

            </div></div>

    )
}

export default Shimmer
