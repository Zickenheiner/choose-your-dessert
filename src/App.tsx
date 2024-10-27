import "./styles/App.css";
import type { Element } from "./type";
import { useEffect, useState } from "react";
import Basket from "./components/Basket";
import DessertMenu from "./components/DessertMenu";
import ModalOrderConfirm from "./components/ModalOrderConfirm";

function App() {
  const [allNumberArticle, setAllNumberArticle] = useState<number>(0);
  const [elements, setElements] = useState<Element[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (modal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modal]);
  return (
    <>
      {modal ? (
        <ModalOrderConfirm
          elements={elements}
          setElements={setElements}
          setAllNumberArticle={setAllNumberArticle}
          setModal={setModal}
        />
      ) : null}
      <div className="app">
        <DessertMenu
          allNumberArticle={allNumberArticle}
          setAllNumberArticle={setAllNumberArticle}
          setElements={setElements}
          elements={elements}
        />
        <Basket
          allNumberArticle={allNumberArticle}
          elements={elements}
          setElements={setElements}
          setAllNumberArticle={setAllNumberArticle}
          setModal={setModal}
        />
      </div>
    </>
  );
}

export default App;
