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
}

export default function MenuItem({ name, image, category, price }: Item) {
  return (
    <article className="item-dessert">
      <img src={image.mobile} alt="img-dessert" className="img-dessert" />
      <ButtonItem />
      <section className="text-container">
        <p className="text-caterogy">{category}</p>
        <h2 className="text-name">{name}</h2>
        <h3>${price.toFixed(2)}</h3>
      </section>
    </article>
  );
}
