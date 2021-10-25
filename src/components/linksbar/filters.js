import { linksbar } from "../../db";
import { RiLinksFill } from "react-icons/ri";
import TextTruncate from "react-text-truncate";

const AllLinks = (props) =>
  linksbar
    .filter((linksbar) => linksbar.category.includes(`${props.categoryList}`))
    .map((link) => {
      return (
        <div
          key={link.linkTo}
          className="link--block projects text-white m-2 md:m-0"
          style={{ opacity: link.development ? "0.7" : "1.0" }}
        >
          <div
            className={`link--container m-0 md:m-2 ${
              link.hot && link.development ? "" : link.hot ? "hot" : ""
            }`}
          >
            <div className="link--block-image">
              <img src={link.imageUrl} alt="" />
            </div>
            <div className="link--block-content">
              <TextTruncate
                line={2}
                element="h1"
                truncateText="…"
                text={link.name}
                className={`font-bold text-md ${
                  link.hot && link.development ? "" : link.hot ? "invert" : ""
                }`}
                // textTruncateChild={<a href="#">Read on</a>}
              />
              <TextTruncate
                line={2}
                element="p"
                truncateText="…"
                className={`text-sm font-medium ${
                  link.hot && link.development ? "" : link.hot ? "invert" : ""
                }`}
                text={link.description}
              />
            </div>
            <a
              className="font-bold"
              href={!link.development ? link.linkTo : null}
              target="_blank"
              rel="noreferrer"
            >
              {!link.development ? link.buttonText : "Under Development"}
            </a>
          </div>
        </div>
      );
    });
linksbar.sort((a, b) => a.weight - b.weight); // WAT?
export default AllLinks;
