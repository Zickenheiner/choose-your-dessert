import "../styles/EmptyBasket.css";

export default function () {
  return (
    <div className="empty-basket-container">
      <img
        src="/assets/images/illustration-empty-cart.svg"
        alt="img-empty-basket"
        className="img-empty-basket"
      />
      <p>Your added items will appear here</p>
    </div>
  );
}
