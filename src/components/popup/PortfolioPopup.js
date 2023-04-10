import { DoraContext } from "@/src/Context";
import { useContext } from "react";
import Modal from "./Modal";
const PortfolioPopup = ({des}) => {
  const { portfolio_modal_show } = useContext(DoraContext);
  console.log('portfolio_modal_show------', portfolio_modal_show)
  return (
    <Modal close={portfolio_modal_show}>
      <div className="content">
        <div className="img">
          <img src="/images/portfolio/1.jpg" alt="dora_img" />
        </div>
        <div className="des">
          <span>Details</span>
          <h4>web Application</h4>
          <p>
            We live in a world where we need to move quickly and iterate on our
            ideas as flexibly as possible. Building mockups strikes the ideal
            balance between true-life representation of the end product and ease
            of modification.
          </p>
          {/* <p>
            Mockups are useful both for the creative phase of the project - for
            instance when you're trying to figure out your user flows or the
            proper visual hierarchy - and the production phase when they will
            represent the target product. Making mockups a part of your creative
            and development process allows you to quickly and easily ideate.
          </p> */}
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioPopup;
