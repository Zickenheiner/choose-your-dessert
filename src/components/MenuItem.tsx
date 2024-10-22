import "../styles/MenuItem.css";

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
  return <div>{name}</div>;
}
