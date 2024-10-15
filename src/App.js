
import './App.css';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa';
import { RiMusicFill } from 'react-icons/ri';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col gap-y-6 overflow-hidden absoute pl-5 pr-5">
     
      <header className="flex justify-between items-center p-6 border-b-2 sticky top-0 bg-black z-10 opacity-65">
  <nav className="space-x-8 text-lg">
    <div className="text-3xl font-bold inline">A&nbsp;I&nbsp;.&nbsp;G&nbsp;E&nbsp;N</div>

    <a href="#" className="hover:text-gray-400">Features</a>
    <a href="#" className="hover:text-gray-400">Roadmap</a>
    <a href="#" className="hover:text-gray-400">Tokenomics</a>
  </nav>
  <div className="space-x-4">
    <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Log in</button>
    <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded text-white hover:opacity-90">White Paper</button>
  </div>
</header>


      <div className="flex flex-col lg:flex-row justify-between gap-x-2 lg:items-center z-0 p-6">
        <div className="flex flex-col gap-x-3 items-center lg:items-start lg:w-[660px] text-center lg:text-left mb-4 lg:mb-0" data-aos="fade-right">
          <div className="bg-black text-white inline-block px-4 py-2 mb-4 rounded-xl border border-white">
            <span>🌟 New in ETH.Ai: Real Time Interaction</span>
          </div>

          <h1 className="font-outfit text-5xl lg:text-6xl font-medium leading-snug lg:leading-[59px] bg-clip-text text-transparent bg-gradient-to-b from-white to-[rgba(255,255,255,0.5)] mb-6">
            IOTA polygon serum ipsum <br /> WAX terraUSD gala THETA.
          </h1>

          <p className="font-outfit text-base lg:text-lg font-normal leading-relaxed lg:leading-[40px] mb-10">Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>

          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-lg lg:text-xl rounded text-white hover:opacity-90">Get Started</button>
        </div>

        <div className="w-full lg:w-1/2 h-auto lg:relative">
          <div
            className="w-full h-72 lg:hidden bg-[url('https://res.cloudinary.com/djexsyuur/image/upload/v1728923130/0JleJ8rPrDUZXoO1OSbzdPVXxcI.png_2_f8gjjo.png')] bg-cover bg-center mb-4"
            data-aos="fade-up" // Animation for mobile image
          ></div>

          <div
            className="hidden lg:grid grid-cols-3 gap-1 animate-scroll-fade-up"
            data-aos="zoom-in" // Animation for the grid of images
          >
            <img src="https://res.cloudinary.com/dahnzyxhs/image/upload/v1728983758/m52ev36yaereyo6vzrkp.jpg" className="rounded-lg h-60" alt="Image 1" />
            <img src="https://res.cloudinary.com/dahnzyxhs/image/upload/v1728983444/samples/coffee.jpg" className="rounded-lg h-60" data-aos="fade-up" alt="Image 2" />
            <img src="https://res.cloudinary.com/dahnzyxhs/image/upload/v1728983442/samples/smile.jpg" className="rounded-lg h-60" alt="Image 8" />

            <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1728905188/Picture_7_ioem8e.png" className="rounded-lg" alt="Image 3" />
            <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1728905188/Picture_6_rndrlg.png" className="rounded-lg" data-aos="fade-up" alt="Image 4" />
            <img src="https://res.cloudinary.com/dahnzyxhs/image/upload/v1728983444/cld-sample-2.jpg" className="rounded-lg" alt="Image 7" />

            <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1728905188/Picture_5_zy1zws.png" className="rounded-lg" alt="Image 5" />
            <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1728905188/Picture_4_wxilnm.png" className="rounded-lg" data-aos="fade-up" alt="Image 6" />
            <img src="https://res.cloudinary.com/dahnzyxhs/image/upload/v1728983444/cld-sample-3.jpg" className="rounded-lg" alt="Image 9" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  bg-black">
        <div className="relative w-full h-full p-6 bg-cover bg-center bg-[url('https://res.cloudinary.com/djexsyuur/image/upload/v1728905242/0JleJ8rPrDUZXoO1OSbzdPVXxcI.png_1_haaqdw.png')]">
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Create, customize, and publish</h1>
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Your digital persona to life effortlessly.</h1>
          </div>
        </div>
      </div>

      {/* thrid girl section */}

      <section className="flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black text-white py-10">
        <div className="flex flex-col md:flex-row items-center max-w-7xl gap-10 px-5">
          <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center">
            <img src="https://res.cloudinary.com/dahnzyxhs/image/upload/v1728983435/samples/people/smiling-man.jpg" alt="Description" className="transform transition-transform duration-300 scale-90 hover:scale-100" />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-5">How it works</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-blue-400 font-semibold bg-white bg-opacity-30">Select an Avatar</span>
              </li>
              <li className="text-gray-400">Create or Generate Script</li>
              <li className="text-gray-400">Select AI Voices</li>
              <li className="text-gray-400">Publish</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-between items-center gap-y-4 p-4">
        <div className="grid grid-cols-2 gap-5">
          {/* First Container */}
          <div className="flex flex-col justify-between items-center bg-[#57534e] max-h-[528px] max-w-[525px] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h1 className="text-center text-white text-xl font-semibold mt-4">AI Outfits</h1>
            <div className="bg-[#FF9999] h-1/2 w-full flex items-center justify-center rounded-t-lg">
              <img src="https://res.cloudinary.com/prod/image/upload/c_auto,g_auto,h_940,w_880/me/smart-crop-1.jpg" alt="AI Outfits" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Second Container */}
          <div className="flex flex-col justify-between items-center bg-[#57534e] max-h-[528px] max-w-[525px] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h1 className="text-center text-white text-xl font-semibold mt-4">
              Realistic <br /> AI Avatar
            </h1>
            <div className="bg-[#FF9999] h-1/2 w-full flex items-center justify-center rounded-t-lg">
              <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1728930980/CJ3ScV4rAlNNF6B194Y2LYy3Yk.png_xz5t8o.png" alt="Realistic AI Avatar" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Third Container */}
          <div className="flex flex-col justify-between items-center bg-[#57534e] max-h-[528px] max-w-[525px] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h1 className="text-center text-white text-xl font-semibold mt-4">
              Generate or write Your <br /> Scripts
            </h1>
            <div className="h-1/2 w-full flex items-center justify-center rounded-t-lg">
              <img data-aos="fade-up" src="https://res.cloudinary.com/dahnzyxhs/video/upload/v1728983438/samples/cld-sample-video.mp4" alt="Scripts" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Fourth Container */}
          <div className="flex flex-col justify-between items-center bg-[#57534e] max-h-[528px] max-w-[525px] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h1 className="text-center text-white text-xl font-semibold mt-4">
              AI-powered voice generator <br /> AI Avatar
            </h1>
            <div className="h-1/2 w-full flex items-center justify-center rounded-t-lg">
              <img data-aos="fade-up" src="https://res.cloudinary.com/djexsyuur/image/upload/v1728931867/9qNX5HraxuRB6kIHb4x9u9jDkk.png_lhrbco.png" alt="Voice Generator" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex  flex-col flex-wrap justify-center items-center p-4 gap-y-3 ">
        <h1 className=" text-5xl font-medium bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Takenomics</h1>
        <div className="flex gap-x-4">
          <div className="flex flex-col">
            <span className="flex gap-x-4">
              Name<span>: &nbsp; AI GEN</span>
            </span>
            <span className="flex gap-x-4">
              Total Supply<span>: &nbsp; 18</span>
            </span>
            <span className="flex gap-x-4">
              Contract<span>: &nbsp; Lorem ipsum dollar ea..</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex gap-x-4">
              Token Name<span>: &nbsp; $AI GEN</span>
            </span>
            <span className="flex gap-x-4">
              Circulating Supply<span>: &nbsp; 1B</span>
            </span>
            <span className="flex gap-x-4">
              Chain<span>: &nbsp; Etherum</span>
            </span>
          </div>
        </div>

        <img src="https://res.cloudinary.com/djexsyuur/image/upload/v1728937130/Tokenomics_nxl2rt.png" />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-8">
        <h1 className="text-5xl font-medium bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Takenomics</h1>
        <div className="flex  flex-col items-center gap-x-8">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl font-medium bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Phase 1</h1>
              <ul className="list-disc max-w-96">
                <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                <li>Flow horizen waves dash tether zcash waves dash terraUSD. </li>
                <li>Quant harmony amp cosmos PancakeSwap decentraland decred. </li>
                <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
              </ul>
            </div>

            <img className="max-w-screen-sm" data-aos="fade-left" src="https://res.cloudinary.com/djexsyuur/image/upload/v1728940286/PCuVUcMVjxjC5kAuPqNGvzjS7Xw.png_vvz4ea.png" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-8">
        <div className="flex  flex-col items-center gap-x-8">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl font-medium bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Phase 2</h1>
              <ul className="list-disc max-w-96">
                <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                <li>Flow horizen waves dash tether zcash waves dash terraUSD. </li>
                <li>Quant harmony amp cosmos PancakeSwap decentraland decred. </li>
                <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
              </ul>
            </div>

            <img className="max-w-screen-sm" data-aos="fade-left" src="https://res.cloudinary.com/djexsyuur/image/upload/v1728940868/UIpzsWjsEP9vnVhXCCTAw9fPY.webp_2_vt8dly.png" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-8">
        <div className="flex  flex-col items-center gap-x-8">
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl font-medium bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Phase 3</h1>
              <ul className="list-disc max-w-96">
                <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                <li>Flow horizen waves dash tether zcash waves dash terraUSD. </li>
                <li>Quant harmony amp cosmos PancakeSwap decentraland decred. </li>
                <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
              </ul>
            </div>

            <img className="max-w-screen-sm" data-aos="fade-left" src="https://res.cloudinary.com/djexsyuur/image/upload/v1728941048/PCuVUcMVjxjC5kAuPqNGvzjS7Xw.png_1_udgcda.png" />
          </div>
        </div>
      </div>

      <div className=" min-h-[500px] flex items-center flex-col gap-y-9 h-screen bg-[url('https://res.cloudinary.com/djexsyuur/image/upload/t_Banner_16:9/v1728954602/div.framer-lnc0cs_burtxk.png')]">
        <div className=" mt-7  p-5 rounded-md  w-6/12 flex justify-between items-center bg-gradient-to-r from-pink-500 to-purple-600">
          <h1 className="text-4xl"> Get Started</h1> <FaArrowRight className="text-2xl" />
        </div>

        <div className="flex gap-x-5  ">
          <h1 className="w-72 "> Dash dash terraUSD neo uniswap kadena helium avalanche polymath bancor.</h1>
          <div className="flex flex-col h-96">
            <p className="self-end"> Looking for help?</p>
            <div>
              <input className="bg-slate-600 rounded-sm" p-3 type="email" placeholder="Enter your email" /> <button className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-sm pl-1 pr-1 ">submit</button>
            </div>
          </div>
        </div>

        <hr className="min-w-full" />
        <div className="flex justify-between w-full">
          <h3> A&nbsp;I&nbsp;.&nbsp;G&nbsp;E&nbsp;N</h3>
          <div className="flex gap-x-3">
            <FaTwitter className="text-xl" />
            <IoLogoLinkedin className="text-xl" />
            <FaYoutube className="text-xl" />
            <RiMusicFill className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
