import { useState } from "react";

type Props = {
  items: string[];
  heading?: string;
  onSelect?: (item: string, index: number) => void;
};

const ListGroup: React.FC<Props> = ({ items, heading, onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(items.length ? 0 : -1);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onSelect?.(items[index], index);
  };

  if (!items.length) {
    return (
      <div>
        {heading && <h4>{heading}</h4>}
        <p>No items found.</p>
      </div>
    );
  }

  return (
    <div>
      {heading && <h4>{heading}</h4>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item} // use index if items can repeat
            className={`list-group-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </li>
        ))}
      </ul>

      {activeIndex >= 0 && (
        <p>
          You have selected item {activeIndex + 1}: <strong>{items[activeIndex]}</strong>
        </p>
      )}
      <p>Click on an item to select it.</p>
    </div>
  );
};

export default ListGroup;
