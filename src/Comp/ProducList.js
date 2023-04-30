import { useContext } from "react";
import { ProductsContext } from "../ContextApi/ProductsContextState";
// import { useRecoilState } from "recoil";
// import Productatomstate from "../Atom/ProductAtom";
const ProducList = (porps) => {
  let value = useContext(ProductsContext);
  // console.log("value",value)
  // let [value,setvalue]=useRecoilState(Productatomstate);


  let allpro = value.map((ele) => (
    <h1 key={ele.id} className="text-center">
      Product no{ele.id} : {ele.Name}
    </h1>
  ));

  return <div className="prodList">{allpro}</div>;
};

export default ProducList;

// import { useContext } from "react";
// import { ProductsContext } from "../App";

// const ProducList = (porps) => {
//   let Product=useContext(ProductsContext);
// let allpro=Product.map((ele)=>
// <h1 key={ele.id} className="text-center">Product no{ele.id} : {ele.Name} </h1>
// );

//   return (
//     <div className="prodList">
//       {allpro}
//     </div>
//   );
// }

// export default ProducList;
