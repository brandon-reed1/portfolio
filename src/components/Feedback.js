import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Feedback = () => {
  return (
    <section className="feedback-section">
      <div className="container">
        <div className="feedback-section-title-cont">
          {/* Feedback Title */}
          <div className="section_title wow fadeInUp">
            <h2>
              Clients are satisfied for <br />
              our work, view feedback
            </h2>
          </div>
          {/* Slider arrow */}
          <div className="feedback-btn-cont wow fadeInUp">
            <a href="#" className="slider-arrow feedback-left">
              <img
                className="svg"
                src="images/icons/arrow-left.svg"
                alt="dora_img"
              />
            </a>
            <a href="#" className="slider-arrow active feedback-right">
              <img
                className="svg"
                src="images/icons/arrow-right.svg"
                alt="dora_img"
              />
            </a>
          </div>
        </div>
        <Swiper
          {...doraSlider.feedbackSlider}
          className="swiper feedback-items-cont"
        >
          <div className="swiper-wrapper feedback-items wow fadeInUp">
            <SwiperSlide className="swiper-slide feedback-item">
              <div className="feedback-active-img">
                <img src="images/testimonials/client1.jpg" alt="dora_img" />
              </div>
              <div className="feedback-info-cont">
                <div className="feedback-title-cont">
                  <h3>Awesome Service!</h3>
                  <div className="feedback-title-element">
                    <img
                      src="./images/bg_elements/feedback-element.svg"
                      alt="dora_img"
                    />
                  </div>
                </div>
                <p className="feedback-txt">
                Brandon Reed's was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.
                </p>
                <div className="feedback-person-info">
                  <div className="feedback-person-img">
                    <img src="images/testimonials/client1.jpg" alt="dora_img" />
                  </div>
                  <div className="feedback-person-name">
                    <h4>Selena Brook</h4>
                    <p>CEO, West Third Enterprises, Inc</p>
                    {/* <h3>Selena Brook</h3>
                      <span>CEO, West Third Enterprises, Inc.</span> */}
                    <div className="feedback-star-cont">
                      <ul>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide feedback-item">
              <div className="feedback-active-img">
                <img src="images/testimonials/client2.jpg" alt="dora_img" />
              </div>
              <div className="feedback-info-cont">
                <div className="feedback-title-cont">
                  <h3>Awesome Service!</h3>
                  <div className="feedback-title-element">
                    <img
                      src="./images/bg_elements/feedback-element.svg"
                      alt="dora_img"
                    />
                  </div>
                </div>
                <p className="feedback-txt">
                Brandon Reed's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.
                </p>
                <div className="feedback-person-info">
                  <div className="feedback-person-img">
                    <img src="images/testimonials/client3.jpg" alt="dora_img" />
                  </div>
                  <div className="feedback-person-name">
                    <h4>Beseie Cooper</h4>
                    <p>Web Designer</p>
                    <div className="feedback-star-cont">
                      <ul>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide feedback-item">
              <div className="feedback-active-img">
                <img src="images/testimonials/client3.jpg" alt="dora_img" />
              </div>
              <div className="feedback-info-cont">
                <div className="feedback-title-cont">
                  <h3>Awesome Service!</h3>
                  <div className="feedback-title-element">
                    <img
                      src="./images/bg_elements/feedback-element.svg"
                      alt="dora_img"
                    />
                  </div>
                </div>
                <p className="feedback-txt">
                  Loved the template design, documentation, customizability and
                  the customer support from Marketify team! I am a noob in
                  programming with very little knowledge about coding.
                </p>
                <div className="feedback-person-info">
                  <div className="feedback-person-img">
                    <img src="images/testimonials/1.png" alt="dora_img" />
                  </div>
                  <div className="feedback-person-name">
                    <h4>Divine Divas</h4>
                    <p>Creative Lead, Good Kind</p>
                    <div className="feedback-star-cont">
                      <ul>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                        <li>
                          <img src="images/icons/Star.svg" alt="dora_img" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default Feedback;
