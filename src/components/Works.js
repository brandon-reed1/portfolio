import dynamic from "next/dynamic";
const PortfolioIsotope = dynamic(() => import("./PortfolioIsotope"), {
  ssr: false,
});
const Portfolio = dynamic(() => import("./portfolio"), {
  ssr: false,
});
const Works = () => {
  return (
    <section className="works-section" id="works">
      <div className="container">
        {/* Work Title */}
        <div className="section_title wow fadeInUp center">
          <p>Portfolio</p>
          <h2>My Amazing Works</h2>
        </div>
        {/* Work Isotope */}
        {/* <Portfolio/> */}
        <PortfolioIsotope />
      </div>
    </section>
  );
};
export default Works;
