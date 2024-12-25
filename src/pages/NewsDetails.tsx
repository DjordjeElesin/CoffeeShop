//style
import "../styles/pages/NewsDetails.scss";
//hooks
import { useParams } from "react-router-dom";
//data
import { newsData } from "../utils/NewsData";
//components
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import AboutCard from "../components/ui/AboutCard";

export default function NewsDetails() {
  const { newsId } = useParams();
  const selectedNews = newsData.news.find((item) => item.id === newsId);

  return (
    <div className="news-details-page">
      <div className="news-details-header">
        <div className="news-item-contr">
          <div className="news-image-contr">
            <img
              src={selectedNews?.image}
              alt={`${selectedNews?.title}-image`}
            />
          </div>
          <div className="news-content-contr">
            {selectedNews && (
              <span className="date">
                {format(selectedNews.date, "MMM dd, yyyy")}
              </span>
            )}
            <h2 className="fw-bold">{selectedNews?.title}</h2>
          </div>
        </div>
      </div>
      <div className="news-full">
        <p className="fs-large fw-bold">{selectedNews?.preview}</p>
        <ReactMarkdown>{selectedNews?.fullStory}</ReactMarkdown>
      </div>
      <AboutCard/>
    </div>
  );
}
