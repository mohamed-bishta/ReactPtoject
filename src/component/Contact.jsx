import blockImgX1 from "./img/avatar-01.png";
import blockImgX2 from "./img/avatar-02.png";
import blockImgX3 from "./img/avatar-03.png";
import blockImgX4 from "./img/avatar-04.png";
import blockImgX5 from "./img/avatar-05.png";
import blockImgX6 from "./img/avatar-06.png";


export default function Contact() {

  return (
    <>
      <div className="testimonials" id="testimonials">
        <h2 className="main-title">Testimonials</h2>
        <div className="container">
          <div className="box">
            <img src={blockImgX1} />
            <h3>Mohamed Farag</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={blockImgX2} />
            <h3>Mohamed Ibrahim</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={blockImgX3} />
            <h3>Shady Nabil</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={blockImgX4} />
            <h3>Amr Hendawy</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={blockImgX5} />
            <h3>Sherief Ashraf</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={blockImgX6} />
            <h3>Osama Mohamed</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
