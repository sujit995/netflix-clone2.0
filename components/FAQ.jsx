import React, { useState } from 'react'
import Heading from './Heading';

const data = [
    {
        id: 1,
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        id: 2,
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        id: 3,
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        id: 4,
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        id: 5,
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
]

const FAQ = () => {
    const [selected, setSelected] = useState(null);

    function handleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
  return (
    <div className='flex flex-col h-{100vh] w-[100vw] justify-center py-20 px-20 bg-black mt-2'>
    <div className="flex justify-center items-center">
    <Heading text={"Frequently Asked Questions"}/>
    </div>
    <div className='mt-4'>
        <div className='w-[100%]'>
            {
                data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className='bg-gray-700 mb-[10px] px-[40px] py-[35px] text-xl' key={index}>
                            <div onClick={() => handleSelection(dataItem.id)} className='text-white flex justify-between align-middle cursor-pointer'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id? (
                                    <div className='text-white mt-6 text-xl'>
                                        <p>{dataItem.answer}</p>
                                    </div>
                                ) : null
                            }
                        </div>
                    ))
                ) : (
                    <div>No Data found</div>
                )
            }
        </div>
    </div>
    <div>
    <div className="flex justify-center items-center mt-6">
    <h3 className="text-white text-xl sm:text-2xl justify-center">
        Ready to watch? Enter your email to create or restart your membership.
    </h3>
    </div>
      <div className="space-x-2 justify-center mt-6 flex flex-col md:flex-row gap-3 md:gap-0 px-16">
        <input
          type="text"
          placeholder="Email Address"
          className="bg-transparent border border-gray-500 block w-full md:w-[40%] rounded-md p-4 text-white"
        />
        <button className="bg-red-800 text-white rounded-md h-[60px] px-5 text-2xl font-semibold cursor-pointer items-center text-center">
          Get Started
        </button>
      </div>
    </div>
    </div>
  )
}

export default FAQ