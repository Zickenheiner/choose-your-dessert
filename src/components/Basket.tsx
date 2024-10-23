import "../styles/Basket.css";
import { useState } from "react";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const [numberArticle, setNumberArticle] = useState(0);
  return (
    <section>
      <h2>Your Cart ({numberArticle})</h2>
      <EmptyBasket />
    </section>
  );
}
