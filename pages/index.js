
import React from "react";
import Navbar from "../Components/Layout/navbar";
//import Footer from "../Components/Layout/footer";
import ReactPlayer from 'react-player';

const Section = ({ children, videoUrl }) => {
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <ReactPlayer
          url={videoUrl}
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="absolute top-0 left-0 z-0"
        />
      </div>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 w-full ">
        <Section videoUrl="https://rr1---sn-nx57ynlk.googlevideo.com/videoplayback?expire=1681805759&ei=X_09ZOmaG4rq8wSR9ZaIBA&ip=15.204.174.204&id=o-AAN2qc1B4B5weQXzki-zyga9riiXNdYSWNwsFLqtFO_N&itag=22&source=youtube&requiressl=yes&spc=99c5CXFG1SFqPY_xVJXZu9IItHSOjK0&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=192.493&lmt=1679719792702831&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIjTG6lZpB9hSX4KHOQUz9ThofD0UW27Nf17H9vPHzhIAiAD1PIDbaAutrCqtjj7FicmvVrMe80zZxTLvKRQA3mqcw%3D%3D&host=rr1---sn-p5qs7nzk.googlevideo.com&redirect_counter=1&rm=sn-p5qe7y7e&req_id=5b5754df8b7ea3ee&cms_redirect=yes&ipbypass=yes&mh=ZX&mip=2605:59c8:458:fc10:5cac:f6bb:3f0:d4a8&mm=31&mn=sn-nx57ynlk&ms=au&mt=1681783749&mv=m&mvi=1&pl=40&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAIMXzPMAU4sbWbTrPYHI9ZdevPiv_0smLPtkJ4lR9-6YAiBMTl83ovfDZc9ZGyKtU5ig3X5gYNJqDpyulMho4SlrMg%3D%3D">
          <h1 className="text-6xl text-white font-bold">Section 1</h1>
        </Section>
        <Section videoUrl="https://vid.puffyan.us/watch?v=AyOnug-3OKM">
          <h1 className="text-6xl text-white font-bold">Section 2</h1>
        </Section>
        <Section videoUrl="https://vid.puffyan.us/watch?v=AyOnug-3OKM">
          <h1 className="text-6xl text-white font-bold">Section 3</h1>
        </Section>
      </div>
    </>
  );
}
