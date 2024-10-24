export interface ButtonItemProps {
  allNumberArticle: number;
  setAllNumberArticle: (allNumberArticle: number) => void;
  setElements: (elements: Element[]) => void;
  element: Element;
  elements: Element[];
}

export interface RemplaceButtonItemProps {
  numberArticle: number;
  allNumberArticle: number;
  setAllNumberArticle: (allNumberArticle: number) => void;
  setElements: (elements: Element[]) => void;
  element: Element;
  elements: Element[];
}

export interface DessertMenuProps {
  allNumberArticle: number;
  setAllNumberArticle: (allNumberArticle: number) => void;
  setElements: (elements: Element[]) => void;
  elements: Element[];
}

export interface BasketProps {
  allNumberArticle: number;
  elements: Element[];
  setElements: (elements: Element[]) => void;
  setAllNumberArticle: (allNumberArticle: number) => void;
}

export interface BasketItemProps {
  name: string;
  number: number;
  price: number;
  id: number;
  elements: Element[];
  setElements: (elements: Element[]) => void;
  allNumberArticle: number;
  setAllNumberArticle: (allNumberArticle: number) => void;
}

export interface ItemProps {
  name: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  price: number;
  id: number;
  allNumberArticle: number;
  setAllNumberArticle: (allNumberArticle: number) => void;
  setElements: (elements: Element[]) => void;
  elements: Element[];
}

export interface Element {
  name: string;
  price: number;
  number: number;
  id: number;
}

export interface FilledBasketProps {
  elements: Element[];
  setElements: (elements: Element[]) => void;
  allNumberArticle: number;
  setAllNumberArticle: (allNumberArticle: number) => void;
}
