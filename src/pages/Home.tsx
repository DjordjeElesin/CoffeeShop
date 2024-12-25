//icons
import { Star } from "@phosphor-icons/react";

//styles
import "../styles/pages/Home.scss";

//components
import Button from "../components/ui/Button";
import Carousel from "../components/structure/Carousel.tsx";
import { Link } from "react-router-dom";
import NewsItem from "../components/ui/news/NewsItem.tsx";
import AboutCard from "../components/ui/AboutCard.tsx";

//types
import { EmblaOptionsType } from "embla-carousel";

//data
import { menuData } from "../utils/MenuData.ts";
import { newsData } from "../utils/NewsData.ts";


const originalArray = Array.from(
  { length: 5 },
  (_, index) => `slider-images/image${index + 1}.jpg`
);
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

export default function Home() {
  return (
    <div className="homePageContr">
      <div className="homeHeaderContr">
        <div className="ratingContr">
          <span>Google:</span>
          <div className="starsContr">
            <Star weight="fill" size={22} />
            <Star weight="fill" size={22} />
            <Star weight="fill" size={22} />
            <Star weight="fill" size={22} />
            <Star weight="fill" size={22} />
          </div>
          <span>(4.9)</span>
        </div>
        <h1 className="text-5xl font-semibold txt-neutral-600">
          Brewed to perfection
        </h1>
        <p className="text-lg txt-neutral-600">
          Your perfect spot for coffee,
          <br /> pastries, and more.
        </p>
        <Link to="/menu">
          <Button variant="secondary">Explore menu</Button>
        </Link>
      </div>
      <Carousel images={originalArray} options={OPTIONS} />
      <main>
        {/*MENU*/}
        <h2 className="fs-h2 fw-bold">Popular on the menu</h2>

        <div className="home-menu-contr">
          {menuData.categories.map((category) => (
            <div className="menu-section" key={category.name}>
              <div className="menu-items-section">
                <h3 className="fs-h3 fw-bold mb-8">{category.name}</h3>
                {category.items
                  .filter((item) => item.isPopular)
                  .map((item) => (
                    <div
                      className="item-section flex"
                      key={`${category.name}-${item.name}`}
                    >
                      <div>
                        <h4 className="fs-large fw-bold">{item.name}</h4>
                        <p className="fw-semibold">{item.description}</p>
                      </div>
                      <span className="fs-medium fw-bold">{`$${item.price}`}</span>
                    </div>
                  ))}
              </div>
              <div className="image-contr">
                <span>{category.name}</span>
                <img src={category.image} alt={`${category.name}-image`} />
              </div>
            </div>
          ))}
        </div>

        {/* NEWS */}
        <h2 className="fs-h2 fw-bold">Top news</h2>
        <div className="home-news-contr">
          {newsData.news
            .filter((item) => item.isPopular)
            .map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
        </div>

        {/* ABOUT */}
        <AboutCard/>
      </main>
    </div>
  );
}
