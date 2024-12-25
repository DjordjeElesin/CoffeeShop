//style
import "../styles/pages/News.scss";
//components
import Carousel from "../components/structure/Carousel";
//data
import { newsData } from "../utils/NewsData";
//types
import { EmblaOptionsType } from "embla-carousel";
import NewsContent from "../components/ui/news/NewsContent";
import NewsItem from "../components/ui/news/NewsItem";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const IMAGES = newsData.news.map((item) => item.image);

const TEXT_OVERLAYS = newsData.news.map((item) => (
  <NewsContent date={item.date} title={item.title} id={item.id}/>
));

export default function News() {
  return (
    <div className="news-page-contr">
      <Carousel
        images={IMAGES}
        slideOverlays={TEXT_OVERLAYS}
        options={OPTIONS}
      />
      <main>
        <h2 className="fs-h2 fw-bold mb-10">All News</h2>
        <div className="news-list-contr">
          {newsData.news.map((item) => <NewsItem key={item.id} item={item}/>)}
        </div>
      </main>
    </div>
  );
}
