import { Article } from "../../../api";
import { AppSpace } from "../../AppSpace";
import "./SimpleNewsCard.scss";
import {
  IoArrowRedoOutline,
  IoHeartOutline,
  IoOpenOutline,
} from "react-icons/io5";

interface Props {
  article: Article;
}
export const SimpleNewsCard = ({ article }: Props) => {
  // Title ust not exceed some characters
  const title =
    article.title.length > 150
      ? article.title.slice(0, 150).concat(" ...")
      : article.title;

  return (
    <div className="group SimpleNewsCard">
      {/* Image Part */}
      <a
        href={article.url}
        target="__blank"
        className="SimpleNewsCard_Img"
        style={{ backgroundImage: `url(${article.urlToImage})` }}
      >
        <div className="SimpleNewsCard_Cont">
          <div className="SimpleNewsCard_Ico">
            <IoOpenOutline size={20} strokeLinecap="butt" strokeWidth={4} />
          </div>
          <div>{title}</div>
        </div>
      </a>
      {/* Actions Part */}
      <div className="group-hover:text-white SimpleNewsCard_Acts">
        <div className="SimpleNewsCard_Sou">{article.source.name}</div>
        <div>
          <AppSpace>
            <button>
              <IoArrowRedoOutline />
            </button>
            <button>
              <IoHeartOutline />
            </button>
          </AppSpace>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
