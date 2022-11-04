import demo1 from "../images/gc.jpg";
import demo2 from "../images/nac.jpg";
import demo3 from "../images/watsa.jpg";

const DashBoard = () => {
  return (
    // <div className="container">
    <div className="row">
      <div className="col-12">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>

          <div className="bannerBox mt-4 do-nicescroll">
            <p className="text-white font-size-1a mb-1 text-center">
              <b style={{ fontSize: "1.8em" }}>Announcements</b>
            </p>

            <span>
              <div style={{ fontSize: "1.2em", color: "#ffdb58" }}>
                <ul className="announce">
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint!</li>
                </ul>
              </div>
            </span>
          </div>

          <div className="carousel-inner" style={{ height: "80vh" }}>
            <div className="carousel-item active bg-dark">
              <img src={demo1} className="img-fluid d-block w-80 op70 ccenter" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item bg-dark">
              <img src={demo2} className="d-block w-50 op70 ccenter" alt="..." />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div> */}
            </div>
            <div className="carousel-item bg-dark">
              <img src={demo3} className="d-block w-100 op70" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default DashBoard;
