import "../styles/ReplacementButtonItem.css";
import type { RemplaceButtonItemProps } from "../type";

export default function ReplacementButtonItem({
  numberArticle,
  allNumberArticle,
  setAllNumberArticle,
  setElements,
  elements,
  element,
}: RemplaceButtonItemProps) {
  const handleClickIncrement = () => {
    setAllNumberArticle(allNumberArticle + 1);
    setElements(
      elements.map((item) =>
        item.name === element.name
          ? { ...item, number: item.number + 1 }
          : item,
      ),
    );
  };

  const handleClickDecrement = () => {
    setAllNumberArticle(allNumberArticle - 1);
    setElements(
      elements
        .filter((item) => (item.name === element.name ? item.number > 1 : true))
        .map((item) =>
          item.name === element.name
            ? { ...item, number: item.number - 1 }
            : item,
        ),
    );
  };

  return (
    <div className="remplacement-button-item">
      <button
        type="button"
        className="button-increment-decrement"
        onClick={handleClickDecrement}
      >
        <img
          src="/src/assets/images/icon-decrement-quantity.svg"
          alt="button-decrement"
        />
      </button>
      <p>{numberArticle}</p>
      <button
        type="button"
        className="button-increment-decrement"
        onClick={handleClickIncrement}
      >
        <img
          src="/src/assets/images/icon-increment-quantity.svg"
          alt="button-increment"
        />
      </button>
    </div>
  );
}
