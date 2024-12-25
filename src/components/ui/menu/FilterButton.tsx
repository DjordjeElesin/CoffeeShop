type FilterButtonProps = {
  category: string;
  isActive: boolean;
  onClick: (category: string) => void;
};

export default function FilterButton({
  category,
  isActive,
  onClick,
}: FilterButtonProps) {
  return (
    <div className={`filter-item${isActive ? " active" : ""}`}>
      <span onClick={() => onClick(category)}>{category}</span>
      <span></span>
    </div>
  );
}
