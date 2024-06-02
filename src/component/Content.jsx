import { useEffect } from "react";
import { Link } from "react-router-dom";

import blockImg1 from "./img/Facebook.png";
import blockImg2 from "./img/LinkedIn.png";
import blockImg3 from "./img/Twitter.png";
import blockImg4 from "./img/Vector.png";

export default function Content() {

  useEffect(() => {
    
    const contentRight = document.querySelector('.content-right');
    const menuBtn = document.querySelector('.menu-btn');

    const toggleNav = () => {
      contentRight.classList.toggle('nav-active');
    };

    menuBtn.addEventListener('click', toggleNav);

    return () => {
      menuBtn.removeEventListener('click', toggleNav);
    };
  }, []);


  return (

    <>
      <div className="color">
        <div className="content">
          <div className="content-left">
            <div className="main-img">
              <img src={blockImg4} alt="notimg" />
              <h2>Pages</h2>
            </div>
            <img src={blockImg1} alt="notimg" />
            <img src={blockImg2} alt="notimg" />
            <img src={blockImg3} alt="notimg" />
          </div>
          <div className="content-right">
            <nav>
              <Link to="/Pages">Pages</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Services">Services</Link>
              <button className="main-button">Order Today</button>
            </nav>
            <div className="menu-btn" >
              <svg className="open-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="close-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="program">
          <h2>Significant reading has more info number</h2>
          <div className="main-span">
            <span></span>
          </div>
        </div>
      </div>
    </>
  )
}



