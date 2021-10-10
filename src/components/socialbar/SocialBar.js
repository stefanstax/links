// ! Local Styles
import "./socialbar.css";

import {AiFillInstagram} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"
import {FiTwitch} from "react-icons/fi"
import {AiFillYoutube} from "react-icons/ai"

const SocialBar = ({name, imageUrl, description, socials}) => {
    return (
        <div className="social--bar text-white">
            <div className="container">
                <img src={imageUrl} alt="" />
                <h3 className="text-3xl font-black my-3">{name}</h3>
                <p class="text-md font-bold">{description}</p>
                <div className="socials--mini">
                    {socials.instagram.includes("https://instagram.com/") ? <a href={socials.instagram}><AiFillInstagram  /></a> : null}
                    {socials.twitch.includes("https://www.twitch.tv/") ? <a href={socials.twitch}><FiTwitch  /></a> : null}
                    {socials.discord.includes("#") && !socials.discord.length < 8 ? <a href="#"><FaDiscord  /></a> : null}
                    {socials.youtube.includes("https://www.youtube.com/channel/") ? <a href={socials.youtube}><AiFillYoutube /></a>: null}
                </div>
            </div>
        </div>
    )
}

export default SocialBar
