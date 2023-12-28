import React from 'react'

const Card = () => {
    return (
        <div>
            <div className='flex flex-wrap px-10 py-3 h-72 items-center justify-between w-[1232px] bg-[#c0c0c1]  '>
                <div className='w-56 aspect-square rounded-lg bg-[#808081] '></div>
                <div className='w-96 h-52 rounded-lg bg-[#808081] '></div>
            </div>

        </div>
    )
}
const DetailedShimmer = () => {
    return (
        <div className='flex justify-center mt-10 flex-wrap gap-8 w-[80%] ml-[50%] -translate-x-[31%]'>
            <Card />
        </div>
    )
}

export default DetailedShimmer
