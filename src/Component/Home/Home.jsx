import React, { useRef } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import rocket from "../media/Animations/missile.json"

const Main = () => {
 
  const i = useRef(),
    a = useRef(),
    s = useRef(),
    o = useRef(),
    c = useRef(),
    d = useRef();

  const g = () =>
    new Promise((b) => {
      setTimeout(() => {
        setTimeout(() => {
          i.current.play();
        }, 700);
        a.current.play();
        s.current.play();
        o.current.play();
        c.current.play();
        b();
      });
    }).then(() =>
      new Promise((b) => {
        setTimeout(() => {
          const j = document.getElementById('missile1'),
            $ = document.getElementById('missile2'),
            tt = document.getElementById('missile3'),
            nt = document.getElementById('missile4');
          document.getElementById('missile5');
          setTimeout(() => {
            setTimeout(() => {
              d.current.play();
            }, 1900);
            j.style.animation = 'missile-launch1 2s linear';
            $.style.animation = 'missile-launch2 2s linear';
            tt.style.animation = 'missile-launch3 2s linear';
            nt.style.animation = 'missile-launch4 2s linear';
          });
          b();
        });
      })
    )
      .then(() =>
        new Promise((b) => {
          setTimeout(() => {
            const j = document.getElementById('h1-text-1');
            document.querySelector('.home').classList.add('changeOpacity');
            j.style.top = '-15vh';
            j.style.left = '3vw';
            j.style.transform = 'rotate(-145deg)';
            const tt = document.getElementById('h1-text-2');
            tt.style.top = '-10vh';
            tt.style.left = '60vw';
            tt.style.transform = 'rotate(525deg)';
            const nt = document.getElementById('h1-text-3');
            nt.style.top = '50vh';
            nt.style.left = '30vw';
            nt.style.transform = 'rotate(95deg)';
            const _e = document.getElementById('h1-text-4');
            _e.style.top = '-10vh';
            _e.style.left = '23vw';
            _e.style.transform = 'rotate(-145deg)';
            const et = document.getElementById('h1-text-5');
            et.style.top = '20vh';
            et.style.left = '73vw';
            et.style.transform = 'rotate(180deg)';
            const it = document.getElementById('h1-text-dash');
            it.style.left = '73vw';
            it.style.transform = 'rotate(180deg)';
            const _ = document.getElementById('h1-text-6');
            _.style.top = '30vh';
            _.style.left = '-13vw';
            _.style.transform = 'rotate(125deg)';
            const rt = document.getElementById('h1-text-7');
            rt.style.top = '27vh';
            rt.style.left = '12vw';
            rt.style.transform = 'rotate(85deg)';
            const at = document.getElementById('h1-text-8');
            at.style.top = '57vh';
            at.style.left = '-7vw';
            at.style.transform = 'rotate(165deg)';
            const st = document.getElementById('h1-text-9');
            st.style.top = '4vh';
            st.style.left = '30vw';
            st.style.transform = 'rotate(195deg)';
            const ot = document.getElementById('h1-text-10');
            ot.style.top = '20vh';
            ot.style.left = '40vw';
            ot.style.transform = 'rotate(270deg)';
            const lt = document.getElementById('h1-text-11');
            lt.style.top = '60vh';
            lt.style.left = '50vw';
            lt.style.transform = 'rotate(300deg)';
            const ft = document.getElementById('h1-text-12');
            ft.style.top = '19vh';
            ft.style.left = '15vw';
            ft.style.transform = 'rotate(90deg)';
            b();
          }, 2000);
        })
      )
      .then(() =>
        new Promise((b) => {
          setTimeout(() => {
            const j = document.getElementById('h1-text-12');
            setTimeout(() => {
              j.style.transform = 'rotate(5300deg) scale(700)';
            }, 500);
            j.style.transform = 'rotate(3040deg)';
            b();
          });
        })
      )
      .then(() =>
        new Promise((b) => {
          setTimeout(() => {
            let j = document.getElementById('home2');
            j.style.right = '-100vw';
            j.style.transition = 'right 1s linear';
            b();
          }, 2000);
        })
      )
      .then(() =>
        new Promise((b) => {
          setTimeout(() => {
            let j = document.getElementById('home3');
            j.style.top = '100vw';
            j.style.transition = 'top 1s linear';
            b();
          }, 2000);
        })
      )
      .then(() =>{

      }
       );

  return (
    <>
      <div className="home1 box-border w-[100vw] h-[100vh] bg-black pt-[10vh] lg:hidden flex justify-center items-center">
        <div>
          <h1 className="text-[20vw]">Hello Mf</h1>
        </div>
      </div>
      <div className="hidden home w-[100vw] h-[100vh] box-border relative lg:flex pt-[30vw] pl-[20vw] lg:pl-[8vw] lg:pt-[20vh] ">
        <div id="home2" className=" absolute z-[100] right-[100vw] bg-red-500 top-0 w-[200vw] h-[100vh] overflow-hidden" />
        <div id="home3" className=" absolute z-[120] top-[-200vh] left-0 bg-yellow-500  w-[100vw] h-[200vh]" />
        <div className=" z-[69]">
          
          <h1 className="text-[14vw] lg:text-[6vw] text-white ">
            <span id="h1-text-1">H</span>
            <span id="h1-text-2">e</span>
            <span id="h1-text-3">l</span>
            <span id="h1-text-4">l</span>
            <span id="h1-text-5">o</span>
            <span id="h1-text-dash">-</span>
            <span id="h1-text-6">F</span>
            <span id="h1-text-7">e</span>
            <span id="h1-text-8">l</span>
            <span id="h1-text-9">l</span>
            <span id="h1-text-10">a</span>
            <span id="h1-text-11">z</span>
            <span id="h1-text-12" className="text-[2vw]">•••</span>
          </h1>
          <h2 className=" text-[30px] md:text-[1.5vw] text-white w-[55vw] ">
            This is my personal website that I made to showcase my thoughts/web dev skills
            <br />
            So let's dive In to
          </h2>
          <button onClick={g} id="button" className="backdrop-filter border-4 text-[5vmin] px-[2vmin] nav mt-[3vh] text-white border-red-700">
            Let's Go...
          </button>
          <div className="missiles relative">
            <Player src={rocket} ref={a} id="missile1" className=" w-[4vw] relative top-[-7.5vh] left-[-30vw] rotate-[45deg]" autoplay={false} />
            <Player src={rocket} ref={s} id="missile2" className="w-[4vw] relative top-[-7.5vh] left-[-30vw] rotate-[45deg]" autoplay={false} />
            <Player src={rocket} ref={o} id="missile3" className=" w-[4vw] relative top-[-7.5vh] left-[-30vw] rotate-[45deg]" autoplay={false} />
            <Player src={rocket} ref={c} id="missile4" className="w-[4vw] relative top-[-7.5vh] left-[-30vw] rotate-[45deg]" autoplay={false} />   
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
