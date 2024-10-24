import "./styles/App.css";
import type { Element } from "./type";
import { useState } from "react";
import Basket from "./components/Basket";
import DessertMenu from "./components/DessertMenu";

function App() {
  const [allNumberArticle, setAllNumberArticle] = useState<number>(0);
  const [elements, setElements] = useState<Element[]>([]);
  return (
    <>
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
      />
    </>
  );
}

export default App;
