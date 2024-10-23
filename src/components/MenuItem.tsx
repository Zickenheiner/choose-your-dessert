import { useState } from "react";
import "../styles/MenuItem.css";
import ButtonItem from "./ButtonItem";

interface Item {
  name: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  price: number;
  allNumberArticle: number;
  setAllNumberArticle: (index: number) => void;
}

export default function MenuItem({
  name,
  image,
  category,
  price,
  allNumberArticle,
  setAllNumberArticle,
}: Item) {
  const [numberArticle, setNumberArticle] = useState<number>(0);

  return (
    <article className="item-dessert">
      <img src={image.mobile} alt="img-dessert" className="img-dessert" />
      {numberArticle === 0 ? (
        <ButtonItem
          numberArticle={numberArticle}
          allNumberArticle={allNumberArticle}
          setNumberArticle={setNumberArticle}
          setAllNumberArticle={setAllNumberArticle}
        />
      ) : null}
      <section className="text-container">
        <p className="text-caterogy">{category}</p>
        <h2 className="text-name">{name}</h2>
        <h3>${price.toFixed(2)}</h3>
      </section>
    </article>
  );
}
