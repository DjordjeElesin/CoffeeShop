import { MenuItemType } from "../../../utils/types/MenuTypes";

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="menu-item" key={item.name}>
      <div>
        <h4 className="fs-large fw-bold">{item.name}</h4>
        <p className="fw-semibold">{item.description}</p>
      </div>
      <span className="fs-medium fw-bold">{`$${item.price}`}</span>
    </div>
  );
}
