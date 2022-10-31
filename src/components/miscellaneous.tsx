
import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";

import handbook_2 from "../assets/handbook_2.png";
import marketplace_2 from "../assets/marketplace_2.png";
import github_2 from '../assets/github_2.png';
import thumb from '../assets/thumbnail.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import handbookCover from "@images/handbookCover.jpg";
import utility from "@images/utility.png";
// import utility from '../assets/utility.png;

gsap.registerPlugin(ScrollTrigger)

const features1 = [
  { name: 'FOR DJS', description: 'Create rapid edits and quickly download multiple arrangements of my track for your own djing, performance and content creation.' },
  { name: 'FOR PRODUCERS', description: 'No more digital service providers taking fees to distribute access mechanisms for our music. ' },
  { name: 'FOR COLLABS', description: 'A framework we can collaborate within - musicians, designers, developers - creating unique and meaningful, collectible art works. ' },
  { name: 'FOR CULTURE', description: 'Building the bottom of a funnel for independent music producers, while supporting 1 of 1 selector djs creating unique dance-floor experiences.' },
]
const features2 = [
  { name: 'TEZOS BLOCKCHAIN', description: 'Proof-of-stake protocol for smart contract development.'},
  { name: 'FA2 CONTRACT', description: 'Equivalent to ERC-721 on Ethereum.'},
  { name: 'INTERACTIVE OBJKT', description: 'Following all best practices for interactive creative leveraging HTML.' },
  // { name: 'BUY, SELL & DL', description: 'As a self-custodied token *Anywhere' },
]

const miscellaneous = () => {

  return (

  <section className="bg-black pt-0 px-0 pb-0 rounded-br mt-0 mx-2 md:mx-0">  

              <img src={thumb} alt="founder_pic" className="max-w-sm ml-auto mr-auto"/>


<div className="mb-14 mx-3 py-3 lg:mx-24 rounded-lg lg:py-12">


  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-0 px-4 sm:px-6 sm:py-0 lg:max-w-7xl lg:grid-cols-2 lg:px-8 mt-0 mb-8 lg:mb-0 "><div>

      <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        
        {features1.map((feature) => (
          <div key={feature.name} className="">
            <dt className="font-mathias text-2xl text-yellow-75 text-center">{feature.name}</dt>
            <dd className="mt-2 text-sm text-gray-500 text-justify">{feature.description}</dd>
          </div>
        ))}
      </dl>
      
      </div>
      <img src={utility} alt="load" className=""/>
            
      <div className="bg-yellow-75 p-10 rounded-lg">
      
      <div className="font-mathias mb-8 text-center text-5xl text-black">
      TECH
      </div>
        <dl className="mt-22 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features2.map((feature) => (
            <div key={feature.name} className="border-tpt-4">
              <dt className="font-mathias text-2xl text-black ml-auto text-center">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500 text-center">{feature.description}</dd>
          
            </div>

            
            
          ))}

<div className="bg-yellow-75 p-0 rounded-lg text-center text-xs">
<b>Resources:</b><br></br>
Tezos.com<br></br>
Opentezos.com<br></br>
Teia.art (Github)
  </div>
          
        </dl>
      </div>

      
    </div>
  </div>


    <div className="mx-auto md:max-w-6xl gap-0 flex flex-col md:flex-row items-center">
      <dl className="w-full h-full md:w-1/2 flex align-middle items-center">
        <div className="container mx-auto">
          <div className=" mx-auto my-auto flex rounded-md shadow-sm align-middle center">
            <img src="https://i.postimg.cc/zfDJcy2h/load.gif" alt="load" className=""/>
          </div>
      </div>  
      </dl>
      <dl className="w-full md:w-1/2 flex align-middle items-center email mb-12">
          <iframe height="500px" src="https://cc76d0e7.sibforms.com/serve/MUIEAD-5OvrZ3hWptCPzI0E5OZK-ACJ-O-5HTgYvjHAsAX9Eto-TF4-AyEOXEVbbpZnQcpdT3Wn8vJPP0SSw8oMPhbYL6rVGBj8xmzV6mIM5AQnLSR1-djxxA0TK-_7cSoWZArh1iYIBj-rAb-eRPa79Pd3YyCg-JRVl5WGoQuzSsGM4gXNHqRXhw5F1VL9CF-aYQTtW3yKpntGb" scrolling="auto" className="block ml-auto mr-auto w-full"></iframe>
      </dl>
    </div>

  </section>

  );
};

export default miscellaneous;
