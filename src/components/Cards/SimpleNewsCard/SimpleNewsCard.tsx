import { Article } from "../../../state";
import { AppSpace } from "../../AppSpace";
import "./SimpleNewsCard.scss";
import { IoArrowRedoOutline, IoHeartOutline } from "react-icons/io5";

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
    <div className="SimpleNewsCard">
      {/* Image Part */}
      <div
        className="SimpleNewsCard_Img"
        style={{ backgroundImage: `url(${article.urlToImage})` }}
      >
        <div className="SimpleNewsCard_Cont">
          <a>{title}</a>
        </div>
      </div>
      {/* Actions Part */}
      <div className="SimpleNewsCard_Acts">
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
