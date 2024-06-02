import blockImg1 from "./img/pexels-andrea-piacquadio-3786748.png";
import blockImg2 from "./img/pexels-diana-agapova-7150986.png";
import blockImg3 from "./img/pexels-pew-nguyen-244134.png";

export default function Pages() {

  return (
    <>
      <div className="element">
        <div className="home-img">
          <div className="contact">
            <img src={blockImg1} alt="notimg" />
            <div className="element-color">
              <div className="main-text">
                <h2>Significant reading has more info number</h2>
                <p>The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.</p>
              </div>
              <div className="text">
                <div className="one">
                  <p>Read more</p>
                </div>
                <div className="one">
                  <p>Author - 23.05.2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <img src={blockImg2} alt="notimg" />
            <div className="element-color">
              <div className="main-text">
                <h2>Significant reading has more info number</h2>
                <p>The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.</p>
              </div>
              <div className="text">
                <div className="one">
                  <p>Read more</p>
                </div>
                <div className="one">
                  <p>Author - 23.05.2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <img src={blockImg3} alt="notimg" />
            <div className="element-color">
              <div className="main-text">
                <h2>Significant reading has more info number</h2>
                <p>The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.</p>
              </div>
              <div className="text">
                <div className="one">
                  <p>Read more</p>
                </div>
                <div className="one">
                  <p>Author - 23.05.2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
