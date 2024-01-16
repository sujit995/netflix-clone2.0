import Navbar from "@/components/Navbar";
import React from "react";
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import LeftBanner from "../components/LeftBanner";
import RightBanner from '../components/RightBanner';
import FAQ from '../components/FAQ';

const Homepage = () => {
  return (
    <div>
    <div className="relative w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50 pb-0 lg:pb-[40px]">
        <Navbar />
        <div className="flex justify-center">
          <div className="py-16 text-center mt-20 w-full">
              <Heading text={"Unlimited movies, TV shows and more"}/>
            <SubHeading subheadings={"Watch anywhere. Cancel anytime."}/>
            <h3 className="text-white text-2xl sm:text-2xl font-normal mt-3 sm:mt-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="space-x-2 justify-center mt-6 flex flex-col md:flex-row gap-3 md:gap-0 px-16">
            <input type="text" placeholder="Email Address" className="bg-transparent border border-gray-500 block w-full md:w-[40%] rounded-md p-4"/>
            <button className="bg-red-600 text-white rounded-md h-[60px] px-5 text-2xl font-semibold cursor-pointer items-center
              text-center">Get Started</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <LeftBanner text={"Enjoy on your TV"} subheadings={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."} src={"https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/78ba0f3be0dbb25adc23cdb36043c698/Android_Collage_1920x1080_Japan_JP.jpg"} alt={"Picture of the author"} width={500} height={500} />
    <RightBanner text={"Download your shows to watch offline"} subheadings={"Save your favourites easily and always have something to watch."} src={"	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} alt={"Picture of the author"} width={500} height={500}  />
    <LeftBanner text={"Watch everywhere"} subheadings={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."} src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"} alt={"Picture of the author"} width={500} height={500} />
    <RightBanner text={"Create profiles for kids"} subheadings={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."} src={"https://occ-0-1946-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"} alt={"Picture of the author"} width={500} height={500}  />
    <FAQ />
    </div>
  );
};

export default Homepage;
