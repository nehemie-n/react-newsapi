import { Article } from "../../../api";
import { AppSpace } from "../../AppSpace";
import "./ElasticNewsCard.scss";
import {
  IoArrowRedoOutline,
  IoHeartOutline,
  IoOpenOutline,
} from "react-icons/io5";

interface Props {
  article: Article;
}
export const ElasticNewsCard = ({ article }: Props) => {
  // Title ust not exceed some characters
  const title =
    article.title.length > 150
      ? article.title.slice(0, 150).concat(" ...")
      : article.title;

  return (
    <div className="group ElasticNewsCard">
      {/* Image Part */}
      <a
        href={article.url}
        target="__blank"
        className="ElasticNewsCard_Img"
        style={{ backgroundImage: `url(${article.urlToImage})` }}
      >
        <div className="ElasticNewsCard_Cont">
          <div className="ElasticNewsCard_Ico">
            <IoOpenOutline size={20} strokeLinecap="butt" strokeWidth={4} />
          </div>
          {/* Title and cards */}
          <div>
            <div>
              {article.source.name}
              {/* {article.} Category missing */}
            </div>
            <div>{title}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
