import "../styles/Basket.css";
import { useState } from "react";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const [numberArticle, setNumberArticle] = useState(0);
  return (
    <section className="basket">
      <h2>Your Cart ({numberArticle})</h2>
      <EmptyBasket />
    </section>
  );
}
