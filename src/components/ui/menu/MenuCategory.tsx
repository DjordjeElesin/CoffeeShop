//style
import "../../../styles/components/ui/MenuCategory.scss";

//types
import { MenuCategoryType } from "../../../utils/types/MenuTypes";
import MenuItem from "./MenuItem";

type MenuCategoryProps = {
  category: MenuCategoryType;
  isFiltered?: boolean;
};

export default function MenuCategory({
  category,
  isFiltered = false,
}: MenuCategoryProps) {
  return (
    <div className="menu-section" key={category.name}>
      <div className="menu-items-section">
        <h3 className="fs-h3 fw-bold mb-8">{category.name}</h3>
        {isFiltered
          ? category.items
              .filter((item) => item.isPopular)
              .map((item) => <MenuItem item={item} />)
          : category.items.map((item) => <MenuItem item={item} />)}
      </div>
      <div className="image-contr">
        <span>{category.name}</span>
        <img src={category.image} alt={`${category.name}-image`} />
      </div>
    </div>
  );
}
