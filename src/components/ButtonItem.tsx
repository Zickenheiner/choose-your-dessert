import "../styles/ButtonItem.css";

interface ButtonItemProps {
  numberArticle: number;
  allNumberArticle: number;
  setNumberArticle: (index: number) => void;
  setAllNumberArticle: (index: number) => void;
}

export default function ButtonItem({
  numberArticle,
  allNumberArticle,
  setNumberArticle,
  setAllNumberArticle,
}: ButtonItemProps) {
  return (
    <button
      type="button"
      className="button-item"
      onClick={() => {
        setAllNumberArticle(allNumberArticle + 1);
        setNumberArticle(numberArticle + 1);
      }}
    >
      <img
        src="/src/assets/images/icon-add-to-cart.svg"
        alt="icon-add-to-card"
        className="img-add-to-card"
      />
      <p>Add to Card</p>
    </button>
  );
}
