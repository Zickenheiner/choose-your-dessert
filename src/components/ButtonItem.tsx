import "../styles/ButtonItem.css";
import type { ButtonItemProps } from "../type";

export default function ButtonItem({
  allNumberArticle,
  setAllNumberArticle,
  setElements,
  element,
  elements,
}: ButtonItemProps) {
  const handlClickAddToCart = () => {
    setAllNumberArticle(allNumberArticle + 1);
    setElements([...elements, element]);
  };

  return (
    <button type="button" className="button-item" onClick={handlClickAddToCart}>
      <img
        src="/src/assets/images/icon-add-to-cart.svg"
        alt="icon-add-to-card"
        className="img-add-to-card"
      />
      <p>Add to Cart</p>
    </button>
  );
}
