const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>Brandon Reed</h1>
            <h3>Senior Full Stack Developer | React, Vue, Node, Laravel</h3>
            <p>
              I'm here to understand your business needs, problems, and solve
              them. I’m a full-stack web developer with 6+ years of experience
              in the software development industry, who’s working with the
              latest and most effective technologies.I have completed more than
              50 projects in PHP (Laravel, CodeIgniter, Vue, React)
              successfully. I can fix bugs and develop custom websites in a
              short time. I have worked with more than 5 well-reputed companies.
            </p>
            <div className="hero-btn-container">
              <a href="images/CV.pdf" download className="btn primary-btn">
                Download CV
              </a>
              {/* <a href="img/cv/CV.pdf" download>
                  Download CV
                </a> */}
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src="images/profile.jpg" alt="dora_img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
