import { useState } from "react";
import Basket from "./components/Basket";
import DessertMenu from "./components/DessertMenu";
import "./styles/App.css";

function App() {
  const [allNumberArticle, setAllNumberArticle] = useState<number>(0);
  return (
    <>
      <DessertMenu
        allNumberArticle={allNumberArticle}
        setAllNumberArticle={setAllNumberArticle}
      />
      <Basket allNumberArticle={allNumberArticle} />
    </>
  );
}

export default App;
