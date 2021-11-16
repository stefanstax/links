// ! Local Styles
import "./socialbar.css";

import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FiTwitch } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

const SocialBar = ({ name, imageUrl, description, socials }) => {
  return (
    <div className="social--bar text-white">
      <div className="container">
        <img src={imageUrl} alt="" />
        {/* <h3 className="text-1xl font-thin my-3">{name}</h3> */}
        <p className="text-sm font-bold mt-4">{description}</p>
        <div className="socials--mini">
          {socials.instagram &&
          socials.instagram.includes("https://instagram.com/") ? (
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              <AiFillInstagram />
            </a>
          ) : null}
          {socials.twitch &&
          socials.twitch.includes("https://www.twitch.tv/") ? (
            <a href={socials.twitch} target="_blank" rel="noreferrer">
              <FiTwitch />
            </a>
          ) : null}
          {socials.discord &&
          socials.discord.includes("https://discord.gg/") &&
          !socials.discord.length < 15 ? (
            <a href={socials.discord} target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
          ) : null}
          {socials.youtube &&
          socials.youtube.includes("https://www.youtube.com/channel/") ? (
            <a href={socials.youtube} target="_blank" rel="noreferrer">
              <AiFillYoutube />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
