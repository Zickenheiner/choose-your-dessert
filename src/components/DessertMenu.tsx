import "../styles/DessertMenu.css";
import data from "../data.json";
import MenuItem from "./MenuItem";

interface DessertMenuProps {
  allNumberArticle: number;
  setAllNumberArticle: (index: number) => void;
}

export default function DessertMenu({
  allNumberArticle,
  setAllNumberArticle,
}: DessertMenuProps) {
  return (
    <section>
      <h1>Desserts</h1>
      {data.map((item) => (
        <MenuItem
          name={item.name}
          image={item.image}
          category={item.category}
          price={item.price}
          key={item.name}
          allNumberArticle={allNumberArticle}
          setAllNumberArticle={setAllNumberArticle}
        />
      ))}
    </section>
  );
}
