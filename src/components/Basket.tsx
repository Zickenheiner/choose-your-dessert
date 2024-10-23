import "../styles/Basket.css";
import EmptyBasket from "./EmptyBasket";

interface BasketProps {
  allNumberArticle: number;
}

export default function Basket({ allNumberArticle }: BasketProps) {
  return (
    <section className="basket">
      <h2>Your Cart ({allNumberArticle})</h2>
      <EmptyBasket />
    </section>
  );
}
