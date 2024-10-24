import "../styles/DessertMenu.css";
import type { DessertMenuProps } from "../type";
import data from "../data.json";
import MenuItem from "./MenuItem";

export default function DessertMenu({
  allNumberArticle,
  setAllNumberArticle,
  setElements,
  elements,
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
          id={item.id}
          key={item.id}
          allNumberArticle={allNumberArticle}
          setAllNumberArticle={setAllNumberArticle}
          setElements={setElements}
          elements={elements}
        />
      ))}
    </section>
  );
}
