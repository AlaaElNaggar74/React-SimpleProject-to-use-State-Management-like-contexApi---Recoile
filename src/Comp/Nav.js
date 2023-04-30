import { useContext } from "react";
import { ProductsContext } from "../ContextApi/ProductsContextState";
import { useRecoilState } from "recoil";
import Productatomstate from "../Atom/ProductAtom";

const Nav = (props) => {
  let value = useContext(ProductsContext);

  // let [value,setvalue]=useRecoilState(Productatomstate);


  return (
    <div>
      <h1>Nav Bar Page With Product Count :{value.length}</h1>
    </div>
  );
};

export default Nav;

// import { useContext } from "react";
// import { ProductsContext } from "../App";
// const Nav = (props) => {

//   let Product=useContext(ProductsContext);
//   return (
//     <div>
//       <h1>Nav Bar Page With Product Count :{Product.length}</h1>
//     </div>
//   );
// }

// export default Nav;
