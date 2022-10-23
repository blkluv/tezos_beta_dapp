import { Link } from "react-router-dom";

import QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj from "../assets/QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj.jpeg";
import QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1 from "../assets/QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1.jpeg";
import QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
import QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ from "../assets/QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ.jpeg";


import React, { Dispatch, SetStateAction, useState, useRef, useEffect, useCallback } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Collection = () => {

  const collection = useRef(null);
  useEffect(() => {
    const col = collection.current;
    gsap.fromTo(col, {opacity:1, y:75}, {opacity:1, y:0, duration:0.25,
      scrollTrigger: {  
        trigger:col,
        scrub: 1,
      }
    });
  });

  return (
    <section className="bg-yellow p-24 sm:p-8 mx-0 mb-12 sm:mt-12 md:mx-0 items-center flex flex-col justify-center">

      <div className="font-mathias mb-14 text-center text-6xl text-yellow-75">
        BROWSE TRAX
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-screen-lg hover:scale-75">
        <Link to="/edit-trax/mechanism" id="open">
          <img src={QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj} alt="open-source" className="hover:w-2xl rounded-md"/>
        </Link>
        <Link to="/edit-trax/alpha-test"  id="acid">
          <img src={QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1} alt="acid beach" className="hover:shadow-2xl rounded-md"/>
        </Link>
        <Link to="/edit-trax/burnt" id="burnt">
          <img src={QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX} alt="burnt" className="hover:shadow-2xl rounded-md"/>
        </Link>
        <div  id="box"><img src={QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ} alt="boxed" className="hover:shadow-2xl rounded-md"/></div>
      </div>     

    </section>
  );
};

export default Collection;
