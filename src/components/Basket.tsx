import "../styles/Basket.css";
import type { BasketProps } from "../type";
import EmptyBasket from "./EmptyBasket";
import FilledBasket from "./FilledBasket";

export default function Basket({
  allNumberArticle,
  elements,
  setElements,
  setAllNumberArticle,
}: BasketProps) {
  return (
    <section className="basket">
      <h2>Your Cart ({allNumberArticle})</h2>
      {allNumberArticle === 0 ? (
        <EmptyBasket />
      ) : (
        <FilledBasket
          elements={elements}
          setElements={setElements}
          allNumberArticle={allNumberArticle}
          setAllNumberArticle={setAllNumberArticle}
        />
      )}
    </section>
  );
}
