type MenuItemType = {
  name: string;
  price: number;
  description: string;
  isPopular: boolean;
};

type MenuCategoryType = {
  name: string;
  items: MenuItemType[];
  image: string;
};

export type {MenuCategoryType, MenuItemType}