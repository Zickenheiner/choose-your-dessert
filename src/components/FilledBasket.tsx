import { useEffect, useState } from "react";
import "../styles/FilledBasket.css";
import type { Element, FilledBasketProps } from "../type";
import BasketItem from "./BasketItem";

export default function FilledBasket({
  elements,
  setElements,
  allNumberArticle,
  setAllNumberArticle,
}: FilledBasketProps) {
  const [allPrice, setAllPrice] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    for (const item of elements) {
      count += item.price * item.number;
    }
    setAllPrice(count);
  }, [elements]);

  const handleClickConfirmOrder = () => {};

  return (
    <div>
      <div className="filled-basket-item-container">
        {elements.map((element: Element) => (
          <BasketItem
            name={element.name}
            number={element.number}
            price={element.price}
            id={element.id}
            elements={elements}
            setElements={setElements}
            allNumberArticle={allNumberArticle}
            setAllNumberArticle={setAllNumberArticle}
            key={element.id}
          />
        ))}
      </div>
      <section className="filled-basket-order-container">
        <div className="filled-basket-price-container">
          <p>Order Total</p>
          <h2>${allPrice.toFixed(2)}</h2>
        </div>
        <div className="filled-basket-carbon-neutral">
          <img
            src="/src/assets/images/icon-carbon-neutral.svg"
            alt="icon-carbon-neutral"
          />
          <p>
            This is a <strong>carbon-neutral</strong> delivery
          </p>
        </div>
        <button
          type="button"
          className="filled-basket-button"
          onClick={handleClickConfirmOrder}
        >
          Confirm Order
        </button>
      </section>
    </div>
  );
}
