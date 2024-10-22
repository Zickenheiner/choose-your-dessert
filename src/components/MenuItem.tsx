import "../styles/MenuItem.css";
import ButtonItem from "./ButtonItem";

interface Item {
  item: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

export default function MenuItem({ item }: Item) {
  const { image, name, category, price } = item;
  return (
    <div>
      <img src={image.mobile} alt="img-dessert" />
      <ButtonItem />
      <p>{category}</p>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
}
