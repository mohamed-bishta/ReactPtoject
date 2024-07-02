
import { useEffect } from "react";

import backgroundX from "./img/landing-image.png";
import backgroundX1 from "./img/gallery-01.png";
import backgroundX2 from "./img/gallery-02.png";
import backgroundX3 from "./img/gallery-03.jpg";
import backgroundX4 from "./img/gallery-04.png";
import backgroundX5 from "./img/gallery-05.jpg";
import backgroundX6 from "./img/gallery-06.png";
import backgroundX8 from "./img/skills.png";
import backgroundX9 from "./img/work-steps.png";
import backgroundX10 from "./img/work-steps-1.png";
import backgroundX11 from "./img/work-steps-2.png";
import backgroundX12 from "./img/work-steps-3.png";
import backgroundX13 from "./img/hosting-advanced.png";
import backgroundX14 from "./img/hosting-basic.png";
import backgroundX15 from "./img/hosting-professional.png";
import backgroundX16 from "./img/video-preview.jpg";
import backgroundX17 from "./img/discount.png";


export default function Content() {

  useEffect(() => {

    let ourOfSetTop = document.querySelector(".Our-SKILLS");

    window.onscroll = function () {

      let skillsOffsetTop = ourOfSetTop.offsetTop;

      let skillsOffsetHeight = ourOfSetTop.offsetHeight;

      let windowHeight = this.innerHeight;

      let windowScrollTop = this.pageYOffset;

      if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {

        let skills = document.querySelectorAll(".skill-box .skill-prorams span");

        skills.forEach(skils => {

          skils.style.width = skils.dataset.progres;

        })
      }

    }

  }, []);

  return (

    <>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Elzero World</h1>
            <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
          </div>
          <div className="image">
            <img src={backgroundX} />
          </div>
        </div>
        <a href="#articles" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>

      {/* Start Gallery  */}
      <div className="gallery" id="gallery">
        <h2 className="main-title">Gallery</h2>
        <div className="container">
          <div className="box">
            <div className="image">
              <img src={backgroundX1} />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={backgroundX2} />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={backgroundX3} />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={backgroundX4} />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={backgroundX5} />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={backgroundX6} />
            </div>
          </div>
        </div>
      </div>
      {/* End Gallery  */}

      {/*  Start Services */}
      <div className="services" id="services">
        <h2 className="main-title">Services</h2>
        <div className="container">
          <div className="box">
            <i className="fas fa-user-shield fa-4x"></i>
            <h3>Security</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-tools fa-4x"></i>
            <h3>Fixing Issues</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-map-marked-alt fa-4x"></i>
            <h3>Location</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-laptop-code fa-4x"></i>
            <h3>Coding</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-palette fa-4x"></i>
            <h3>Security</h3>
            <div className="info">
              <a href="#">Design</a>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn fa-4x"></i>
            <h3>Marketing</h3>
            <div className="info">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
      </div>
      {/* End Services */}


      {/*  Start Skills  */}

      <div className="Our-SKILLS">
        <h2>Our SKILLS</h2>
        <div className="main-span">
          <span></span>
        </div>
        <div className="container-box">
          <div className="element-img">
            <img src={backgroundX8} />
          </div>
          <div className="skills">
            <div className="skill-box">
              <div className="skill-name">HTML</div>
              <div className="skill-prorams">
                <span className="progress-bar" data-progres="100%"></span>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-name">CSS</div>
              <div className="skill-prorams">
                <span className="progress-bar" data-progres="100%"></span>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-name">JavaScript</div>
              <div className="skill-prorams">
                <span className="progress-bar" data-progres="100%"></span>
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-name">React.js</div>
              <div className="skill-prorams">
                <span className="progress-bar" data-progres="100%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  End Skills  */}

      {/*  Start Work Steps */}
      <div className="work-steps" id="work-steps">
        <h2 className="main-title">How It Works ?</h2>
        <div className="container">
          <img className="image" src={backgroundX9} />
          <div className="info">
            <div className="box">
              <img src={backgroundX10} />
              <div className="text">
                <h3>Business Analysis</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                  recusandae debitis vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src={backgroundX11} />
              <div className="text">
                <h3>Architecture</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                  recusandae debitis vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src={backgroundX12} />
              <div className="text">
                <h3>Developement</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                  recusandae debitis vel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  End Work Steps */}

      {/*  Start Pricing  */}
      <div className="pricing" id="pricing">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <h2 className="main-title">Pricing Plans</h2>
        <div className="container">
          <div className="box">
            <div className="title">Basic</div>
            <img decoding="async" src={backgroundX13} />
            <div className="price">
              <span className="amount">$15</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>10GB HDD Space</li>
              <li>5 Email Addresses</li>
              <li>2 Subdomains</li>
              <li>4 Databases</li>
              <li>Basic Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div className="box popular">
            <div className="label">Most Popular</div>
            <div className="title">Advanced</div>
            <img decoding="async" src={backgroundX14} />
            <div className="price">
              <span className="amount">$25</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>20GB HDD Space</li>
              <li>10 Email Addresses</li>
              <li>5 Subdomains</li>
              <li>8 Databases</li>
              <li>Advanced Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div className="box">
            <div className="title">Professional</div>
            <img decoding="async" src={backgroundX15} />
            <div className="price">
              <span className="amount">$45</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>50GB HDD Space</li>
              <li>20 Email Addresses</li>
              <li>10 Subdomains</li>
              <li>20 Databases</li>
              <li>Professional Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
        </div>
      </div>
      {/*  End Pricing  */}

      {/*  Start Videos  */}
      <div className="videos" id="videos">
        <h2 className="main-title">Top Videos</h2>
        <div className="container">
          <div className="holder">
            <div className="list">
              <div className="name">
                Top Videos
                <i className="fas fa-random"></i>
              </div>
              <ul>
                <li>How To Create Sub Domain<span>05:18</span></li>
                <li>Playing With The DNS <span>03:18</span></li>
                <li>Everything About The Virtual Hosts <span>05:25</span></li>
                <li>How To Monitor Your Website <span>04:16</span></li>
                <li>Uncharted Beating The Last Boss <span>07:48</span></li>
                <li>Ys Oath In Felghana Overview <span>03:12</span></li>
                <li>Ys Series All Games Ending <span>08:10</span></li>
              </ul>
            </div>
            <div className="preview">
              <img decoding="async" src={backgroundX16} />
              <div className="info">Everything About The Virtual Hosts</div>
            </div>
          </div>
        </div>
      </div>
      {/*  End Videos  */}

      {/*  Start Discount  */}

      <div className="discount" id="discount">
        <div className="image">
          <div className="contentt">
            <h2>We Have A Discount</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur,
              recusandae
              ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel
              similique
              laborum dicta aperiam odit doloribus corporis.
            </p>
            <img decoding="async" src={backgroundX17} />
          </div>
        </div>
        <div className="form">
          <div className="contentt">
            <h2>Request A Discount</h2>
            <form action="">
              <input className="input" type="text" placeholder="Your Name" name="name" />
              <input className="input" type="email" placeholder="Your Email" name="email" />
              <input class="input" type="text" placeholder="Your Phone" name="mobile" />
              <textarea class="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>

      {/*  End Discount  */}

      {/*  Start Footer  */}
      <div className="footer">
        <div className="container">
          <div className="box">
            <h3>Elzero</h3>
            <ul className="social">
              <li>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div className="box">
            <ul className="links">
              <li><a href="#">Important Link 1</a></li>
              <li><a href="#">Important Link 2</a></li>
              <li><a href="#">Important Link 3</a></li>
              <li><a href="#">Important Link 4</a></li>
              <li><a href="#">Important Link 5</a></li>
            </ul>
          </div>
          <div className="box">
            <div className="line">
              <i className="fas fa-map-marker-alt fa-fw"></i>
              <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
            </div>
            <div className="line">
              <i className="far fa-clock fa-fw"></i>
              <div className="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div className="line">
              <i className="fas fa-phone-volume fa-fw"></i>
              <div className="info">
                <span>+20123456789</span>
                <span>+20198765432</span>
              </div>
            </div>
          </div>
          <div className="box footer-gallery">
            <img decoding="async" src={backgroundX1} />
            <img decoding="async" src={backgroundX2} />
            <img decoding="async" src={backgroundX3} />
            <img decoding="async" src={backgroundX4} />
            <img decoding="async" src={backgroundX5} />
            <img decoding="async" src={backgroundX6} />
          </div>
        </div>
        <p className="copyright">Made With &lt;3 By Elzero</p>
      </div>
      {/*  End Footer  */}

    </>

  )
}



