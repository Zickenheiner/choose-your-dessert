import "../styles/DessertMenu.css";
import data from "../data.json";
import MenuItem from "./MenuItem";

export default function DessertMenu() {
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
        />
      ))}
    </section>
  );
}
