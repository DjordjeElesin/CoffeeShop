//style
import "../styles/pages/Menu.scss";
//data
import { menuData } from "../utils/MenuData";
//components
import FilterButton from "../components/ui/menu/FilterButton";
import MenuCategory from "../components/ui/menu/MenuCategory";

//hooks
import { useMemo, useState } from "react";

const CATEGORIES = [
  "Full Menu",
  "Coffee",
  "Specialty Lattes",
  "Tea & Other Beverages",
  "Baked Goods",
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Full Menu"
  );

  const filteredMenu = useMemo(
    () =>
      selectedCategory === "Full Menu"
        ? menuData.categories
        : menuData.categories.filter(
            (category) => category.name === selectedCategory
          ),
    [selectedCategory]
  );

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu-page-contr">
      <div className="menu-header-contr">
        <div className="header-image">
          {/*           <img src="https://images.unsplash.com/photo-1527512666523-bb0e4389d842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
          <h1>Welcome to Our Menu!</h1>
        </div>
        <p className="fw-semibold">
          From bold
          espressos to freshly
          baked treats, our menu has something for everyone. Discover a world of flavors crafted to delight your senses. 
        </p>
      </div>
      <div className="menu-filter-contr">
        {CATEGORIES.map((category) => (
          <FilterButton
            key={category}
            category={category}
            isActive={selectedCategory === category}
            onClick={handleFilterChange}
          />
        ))}
      </div>
      <div className="menu-contr">
        {filteredMenu.map((category) => (
          <MenuCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
