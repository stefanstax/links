import LinksBar from "../../linksbar/LinksBar";
import SocialBar from "../../socialbar/SocialBar";
import { socialbar, linksbarstatus } from "../../../db";

const FrontPage = () => {

  return (
    <>
      <SocialBar {...socialbar} />
      <LinksBar {...linksbarstatus} />
    </>
  );
};

export default FrontPage;
