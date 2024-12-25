//style
import "../../../styles/components/ui/NewsItem.scss";
//fns
import { format } from "date-fns";
//components
import { Link } from "react-router-dom";

type NewsContentProps = {
  date: string;
  title: string;
  id: string
};

export default function NewsContent({ date, title, id }: NewsContentProps) {
  
  return (
    <Link to={`/news/${id}`}>
      <div className="news-content-contr">
        <span className="date">{format(date, "MMM dd, yyyy")}</span>
        <h4 className="fs-h4 fw-bold">{title}</h4>
      </div>
    </Link>
  );
}
