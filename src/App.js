import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header";
import Body from "./Pages/Body";
import Transaction from "./Pages/Transaction";
import {  useState } from "react";
import SettleUp from "./Pages/SettleUp";


function App() {

  const [nameArray, setNameArray]= useState([]);

  function nameCarrier(e)
  {
    e.sort();
    setNameArray([...e]);

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>

            <Route path="/body" element={<Body nameCarrier={nameCarrier}></Body>}> </Route>

            <Route path="/showName" element={<Transaction nameArray={nameArray} />} ></Route>

            <Route path="/settleUp" element={<SettleUp/>}  ></Route>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
