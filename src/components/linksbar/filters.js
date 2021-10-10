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
        >
          <div className="link--container m-0 md:m-2">
            <div className="link--block-image">
              <img src={link.imageUrl} alt="" />
            </div>
            <div className="link--block-content">
              <TextTruncate
                line={1}
                element="p"
                truncateText="…"
                text={link.name}
                className="font-bold text-md"
                // textTruncateChild={<a href="#">Read on</a>}
              />
              <TextTruncate
                line={4}
                element="p"
                truncateText="…"
                className="text-sm"
                text={link.description}
                // textTruncateChild={<a href="#">Read on</a>}
              />
            </div>
            {window.innerWidth < 600 ? (
              <a
                href={link.linkTo}
                className="font-bold"
                target="_blank"
                rel="noreferrer"
              >
                {link.buttonText}
              </a>
            ) : (
              <div className="link--block-linking">
                <a href={link.linkTo} target="_blank" rel="noreferrer">
                  <RiLinksFill fontSize="30px" />
                </a>
              </div>
            )}
          </div>
        </div>
      );
    });

export default AllLinks;
