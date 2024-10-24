import "../styles/MenuItem.css";
import ButtonItem from "./ButtonItem";
import ReplacementButtonItem from "./ReplacementButtonItem";
import type { Element, ItemProps } from "../type";

export default function MenuItem({
  name,
  image,
  category,
  price,
  id,
  allNumberArticle,
  setAllNumberArticle,
  setElements,
  elements,
}: ItemProps) {
  const itemInCart = elements.find((item) => item.id === id);
  const numberArticle = itemInCart ? itemInCart.number : 0;

  const element: Element = {
    name: name,
    price: price,
    number: 1,
    id: id,
  };

  return (
    <article className="item-dessert">
      <img
        src={image.mobile}
        alt="img-dessert"
        className={
          numberArticle === 0 ? "img-dessert" : "img-dessert-border img-dessert"
        }
      />
      {numberArticle === 0 ? (
        <ButtonItem
          allNumberArticle={allNumberArticle}
          setAllNumberArticle={setAllNumberArticle}
          setElements={setElements}
          element={element}
          elements={elements}
        />
      ) : (
        <ReplacementButtonItem
          numberArticle={numberArticle}
          allNumberArticle={allNumberArticle}
          setAllNumberArticle={setAllNumberArticle}
          setElements={setElements}
          element={element}
          elements={elements}
        />
      )}
      <section className="text-container">
        <p className="text-caterogy">{category}</p>
        <h2 className="text-name">{name}</h2>
        <h3>${price.toFixed(2)}</h3>
      </section>
    </article>
  );
}
