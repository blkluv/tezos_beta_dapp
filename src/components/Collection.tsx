import { Link } from "react-router-dom";

import QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj from "../assets/QmRft7BBYvJLdVUmYRw9stoUAaomtvzxUL8n5JLqTCSMWj.jpeg";
import QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1 from "../assets/QmX6mLXAv3TgBBsP5Ahjiz9R3zV3sid2DnXQLsjNuo1vJ1.jpeg";
import QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX from "../assets/QmPgdPxBpeMaWpUzjxxV4boeB9P4nC63zApn98TSn7MPoX.jpeg";
// import QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ from "../assets/QmQDUgmJdguCMhK9NVvqWdYpTnXjDDZhmA5E7Di2U6BgVJ.jpeg";
import icon0 from "../assets/icon0.png";
import icon1 from "../assets/icon1.png";

import React, { useState, useRef, useEffect, useCallback, useContext, createContext } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {player, Data, Progress, Control} from './MediaPlayer'
gsap.registerPlugin(ScrollTrigger)


const tracks = [
  {
    name: "Mekanın Sahibi",
    artist: "Norm Ender",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
    url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
  },
  {
    name: "Rag'n'Bone Man",
    artist: "Human",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
  }]
  
const player = new Audio(tracks[0].source)
player.setAttribute('preload', 'metadata')
const userOptions = createContext({
  shuffle: false,
  repeat: false,
})


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

  let [idx0, setIdx0] = useState<number>(0);
  // let [idx1, setIdx1] = useState<number>(1);
  // let [idx2, setIdx2] = useState<number>(2);
  // let [idx3, setIdx3] = useState<number>(3);
	let [playState1, setPlayState1] = useState<boolean>(false);
  // let [playState2, setPlayState2] = useState<boolean>(false);
  // let [playState3, setPlayState3] = useState<boolean>(false);
  // let [playState4, setPlayState4] = useState<boolean>(false);
	useEffect(() => {
		if(playState1 === true)
			player.play()
		else
			player.pause()
    
  //   if(playState2 === true)
	// 		player.play()
	// 	else
	// 		player.pause()
    
  //   if(playState3 === true)
	// 		player.play()
	// 	else
	// 		player.pause()

  //   if(playState4 === true)
	// 		player.play()
	// 	else
	// 		player.pause()
	})

  const features = [
    { name: 'FOR DJS', description: 'Download preset stereo edits (.wavs) of a track, or create your own edits for public use/performance. ' },
    { name: 'FOR PRODUCERS', description: 'Removes 3rd-party digital service providers (and any layer other than the Collectible) when distributing tracks for download.' },
    { name: 'FOR COLLABS', description: 'An accessible build framework for musicians, designers and developers to create meaningful collaborations.' },
    { name: 'FOR CULTURE', description: 'Supporting 1 of 1 selector djs, unique dance-floor experiences and building the bottom of a funnel for independent producer/djs.' },
    // { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

  return (
    <section className="bg-yellow p-24 sm:p-8 mx-0 mb-12 sm:mt-12 md:mx-0 items-center flex flex-col justify-center bg-white">


  
      <div className="font-mathias mb-14 text-center text-6xl text-yellow-75 text-8xl">
        BROWSE TRAX
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-screen-lg hover:scale-75">
        <div className="text-black rounded-md border-4 border-black flex flex-col items-center font-mathias gap-y-3 justify-center py-4 px-2">
          <img src={icon0} alt="icon0" className="w-11 h-4"/>
          <img src={icon1} alt="icon1" className="w-36 h-36"/>
          <Data idx={idx0}/>
          <Progress 
            setIdx={setIdx0} 
            idx={idx0} 
          />
          <Control 
            playState={playState1} 
            setPlayState={setPlayState1}
          />
          <div className="border-4 border-black rounded-md px-3 py-1">
            <button className="uppercase">edit this track</button>
          </div>
        </div>
      </div>     
    </section>
  );
};


export default Collection;
