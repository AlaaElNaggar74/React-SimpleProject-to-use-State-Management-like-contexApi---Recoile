import { useState, createContext } from "react";

export const ProductsContext = createContext();

const ProductsContextState = (props) => {
  let [products, setProduct] = useState([
    { id: 1, Name: "Alaa-Context", Tilte: "ElNaggar" },
    { id: 2, Name: "abdo-Context", Tilte: "ElNaggar" },
    { id: 3, Name: "eltawabb-Context", Tilte: "ElNaggar" },
    { id: 4, Name: "vfffffff-Context", Tilte: "ElNaggar" },
  ]);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextState;
