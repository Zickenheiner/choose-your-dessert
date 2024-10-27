import "../styles/BasketItem.css";
import type { BasketItemProps, Element } from "../type";

export default function BasketItem({
  name,
  number,
  price,
  elements,
  id,
  setElements,
  allNumberArticle,
  setAllNumberArticle,
}: BasketItemProps) {
  const handleClickDeleteItem = () => {
    const [element] = elements.filter((item: Element) => item.id === id);
    setElements(elements.filter((item: Element) => item.id !== id));
    setAllNumberArticle(allNumberArticle - element.number);
  };

  return (
    <div className="basket-item-container">
      <div className="basket-item-text-container">
        <h4 className="basket-item-name">{name}</h4>
        <div className="basket-item-info-container">
          <p className="basket-item-number">{number}x</p>
          <p className="basket-item-price">${price}</p>
          <p className="basket-item-price-multiply-number">
            ${(number * price).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="delete-item-basket"
        onClick={handleClickDeleteItem}
      >
        <img src="/assets/images/icon-remove-item.svg" alt="icon-remove-item" />
      </button>
    </div>
  );
}
