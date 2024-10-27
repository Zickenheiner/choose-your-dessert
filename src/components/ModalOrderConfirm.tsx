import { toast } from "react-toastify";
import "../styles/ModalOrderConfirm.css";
import type { ModalOrderConfirmProps } from "../type";
import ModalItem from "./ModalItem";
import { useEffect, useState } from "react";

export default function ModalOrderConfirm({
  elements,
  setModal,
  setElements,
  setAllNumberArticle,
}: ModalOrderConfirmProps) {
  const [allPrice, setAllPrice] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    for (const item of elements) {
      count += item.price * item.number;
    }
    setAllPrice(count);
  }, [elements]);

  const handleClickClose = () => {
    setModal(false);
  };

  const handleClickConfirm = () => {
    setAllNumberArticle(0);
    setElements([]);
    setModal(false);
    toast.success("Successful order", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: false,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      console.log("ok");
    }
  });

  return (
    <div className="modal-background">
      <div className="modal-container">
        <section className="header-container">
          <div className="header-modal">
            <img
              src="./assets/images/icon-order-confirmed.svg"
              alt="icon-order-confirmed"
            />
            <button
              type="button"
              className="modal-close-button"
              onClick={handleClickClose}
            >
              <img
                src="./assets/images/icon-remove-item.svg"
                alt="icon-remove"
              />
            </button>
          </div>
          <h2>Order Confirmed</h2>
          <p className="modal-enjoy-text">We hope you enjoy your food!</p>
        </section>
        <section className="modal-order-and-item-container">
          <div className="modal-items-container">
            {elements.map((item) => (
              <ModalItem key={item.id} element={item} />
            ))}
          </div>
          <div className="modal-order-total-container">
            <p>Order Total</p>
            <h2>${allPrice.toFixed(2)}</h2>
          </div>
        </section>
        <button
          type="button"
          className="modal-button-confirm"
          onClick={handleClickConfirm}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
