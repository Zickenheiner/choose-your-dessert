import "../styles/ButtonItem.css";

export default function ButtonItem() {
  return (
    <div className="button-item">
      <img
        src="/src/assets/images/icon-add-to-cart.svg"
        alt="icon-add-to-card"
        className="img-add-to-card"
      />
      <p>Add to Card</p>
    </div>
  );
}
