import { Fragment, useState } from "react";
// import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      {/* <DetailsPopup open={popup} close={() => setPopup(false)} /> */}
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
           
            <div className="portfolio_list">
              <ul>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/1.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="https://www.xometry.com/" target="_blank">Xomatery</a>
                        </span>
                        <h3 className="title">
                          
                          <a href="https://www.xometry.com/" target="_blank">
                            Web Application for
                            <br /> develop effective prototypes and scale up to production parts
                          </a>
                        </h3>
                        
                        <span className="view_project">
                          <a href="https://www.xometry.com/" target="_blank" >
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link popup-youtube"
                      href="https://www.xometry.com/" target="_blank"
                    />
                  </div>
                </li>
                {/* <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/2.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">VENDERBILT HEALTH</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Finding a doctor
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link popup-vimeo"
                      href="https://www.vanderbilthealth.com/" target="_blank"
                    />
                  </div>
                </li> */}
                {/* <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/3.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">crown STAFFING</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Hiring Talent
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://www.crownstaffing.com/" target="_blank"
                    />
                  </div>
                </li> */}
                {/* <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/4.jpg"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Loop</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                          Web Application for
                            <br /> exchange-first returns platform for scaling Shopify brands.
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      href="https://www.loopreturns.com/" target="_blank"
                    />
                  </div>
                </li> */}
                {/* <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                /> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
