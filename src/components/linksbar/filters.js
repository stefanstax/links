import { linksbar } from "../../db";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

const AllLinks = (props) =>
  linksbar
    .filter((linksbar) => linksbar.category.includes(`${props.categoryList}`))
    .map((link) => {
      return (
        <div
          key={link.cleanUrl}
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
                line={1}
                element="h1"
                truncateText="…"
                text={link.name}
                className={`font-bold text-md ${
                  link.hot && link.development ? "" : link.hot ? "invert" : ""
                }`}
                // textTruncateChild={<a href="#">Read on</a>}
              />
              <TextTruncate
                line={3}
                element="p"
                truncateText="…"
                className={`text-sm font-medium ${
                  link.hot && link.development ? "" : link.hot ? "invert" : ""
                }`}
                text={link.description}
              />
            </div>
            <div className="link__links">
              <a
                className="font-bold"
                href={!link.development ? link.linkTo : null}
                target="_blank"
                rel="noreferrer"
              >
                {!link.development ? link.buttonText : "Under Development"}
              </a>
              {/* V2 */}
              {/* <Link to={`/${link.cleanUrl}`}>Project Details</Link> */}
            </div>
          </div>
        </div>
      );
    });
linksbar.sort((a, b) => a.weight - b.weight); // WAT?
export default AllLinks;
