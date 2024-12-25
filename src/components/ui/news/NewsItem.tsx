//style
import "../../../styles/components/ui/NewsItem.scss";
//components
import NewsContent from "./NewsContent";
//types
import { NewsItemType } from "../../../utils/types/NewsTypes";
import { Link } from "react-router-dom";

type NewsItemProps = {
  item: NewsItemType;
};

export default function NewsItem({ item }: NewsItemProps) {
  return (
    <div className="news-item-contr" key={item.id}>
      <Link to={`/news/${item.id}`}>
        <div className="news-image-contr">
          <img src={item.image} alt={`${item.title}-image`} />
        </div>
      </Link>
      <NewsContent date={item.date} title={item.title} id={item.id} />
    </div>
  );
}
