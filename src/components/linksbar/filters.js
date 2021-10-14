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
            className={`link--container m-0 md:m-2 ${link.hot ? "hot" : ""}`}
          >
            {link.hot ? <div className="popular animate-ping"></div> : null}
            <div className="link--block-image">
              <img src={link.imageUrl} alt="" />
            </div>
            <div className="link--block-content">
              <TextTruncate
                line={1}
                element="p"
                truncateText="…"
                text={link.name}
                className={`font-bold text-md ${link.hot ? "invert" : ""}`}
                // textTruncateChild={<a href="#">Read on</a>}
              />
              <TextTruncate
                line={4}
                element="p"
                truncateText="…"
                className={`text-sm font-medium ${link.hot ? "invert" : ""}`}
                text={link.description}
                // textTruncateChild={<a href="#">Read on</a>}
              />
            </div>
            {window.innerWidth < 600 ? (
              <a
                className="font-bold"
                href={!link.development ? link.linkTo : null}
                target="_blank"
                rel="noreferrer"
              >
                {!link.development ? link.buttonText : "Under Development"}
              </a>
            ) : (
              <div className="link--block-linking">
                <a
                  href={!link.development ? link.linkTo : null}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    cursor: link.development ? "not-allowed" : "pointer",
                  }}
                >
                  {link.development ? (
                    <img
                      width="28px"
                      height="28px"
                      src="https://res.cloudinary.com/dnqicdh71/image/upload/v1634216919/icons8-roadblock-100.png"
                    />
                  ) : (
                    <RiLinksFill fontSize="30px" />
                  )}
                </a>
              </div>
            )}
          </div>
        </div>
      );
    });
linksbar.sort((a, b) => b.newLink - a.newLink && b.hot - a.hot);
export default AllLinks;
