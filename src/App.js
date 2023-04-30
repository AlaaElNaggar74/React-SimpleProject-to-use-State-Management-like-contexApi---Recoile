// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./Comp/Nav";
import ProducList from "./Comp/ProducList";
import CardExtend from "./Comp/CardExtend";
import ProductsContextState from "./ContextApi/ProductsContextState";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';

function App() {
  return (
    <div className="App">
      <ProductsContextState>
      {/* <RecoilRoot> */}
        <CardExtend>
        <CardExtend.Footers />
        <CardExtend.TTitle />
        <CardExtend.Boody />
        <Nav />
        </CardExtend>
      
        <ProducList />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Helle</h1>
              </>
            }
          />
        </Routes>
        {/* </RecoilRoot> */}
      </ProductsContextState>
    </div>
  );
}

export default App;
