import "../styles/ModalItem.css";
import data from "../data.json";
import type { ImageProps, ModalItemProps } from "../type";

export default function ModalItem({ element }: ModalItemProps) {
  const item = data.find((item) => item.id === element.id);

  if (!item) {
    return null;
  }

  const { image }: ImageProps = item;
  console.log(image);
  const { name, price, number } = element;
  return (
    <div className="modal-item-container">
      <img src={image.thumbnail} className="modal-img-item" alt="img-item" />
      <div className="modal-item-text-container">
        <div className="modal-item-small-text-container">
          <h4 className="modal-item-name">{name}</h4>
          <div className="modal-item-info-container">
            <p className="modal-item-number">{number}x</p>
            <p className="modal-item-price">${price}</p>
          </div>
        </div>
        <p className="modal-item-price-multiply-number">
          ${(number * price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
