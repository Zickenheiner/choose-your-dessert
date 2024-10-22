import "../styles/DessertMenu.css";
import data from "../data.json";
import MenuItem from "./MenuItem";

export default function DessertMenu() {
  return (
    <div>
      <h1>Desserts</h1>
      {data.map((item) => (
        <MenuItem item={item} key={item.name} />
      ))}
    </div>
  );
}
