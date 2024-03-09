import React from 'react'
import Heading from './Heading';
import SubHeading from './SubHeading';


const RightBanner = ({ text, subheadings, src, alt, width, height }) => {
  return (
    <div className='w-full bg-black mt-2 flex flex-col md:flex-row px-5 md:px-20 py-5 md:py-20'>
        <div className='w-full md:w-1/2'>
            <img src={src} alt={alt} width={width} height={height} />
        </div>
        <div className='w-full md:w-1/2'>
            <Heading text={text}/>
            <SubHeading subheadings={subheadings}/>
        </div>
    </div>
  )
}

export default RightBanner