import React, { useContext,  useEffect,  useReducer, useState } from "react";
import "./CssFiles/DataField.css";
import MultipleSelectChip from "./MultipleSelectChip";
import BasicSelect from "./BasicSelect";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import DataList from "./DataList";
import Outlined from "./Outlined";
import Amount from "./Amount";
import { useNavigate } from "react-router-dom";
import TransactionData from "../Contexts/TransactionData";
import { useLocalStorage } from "@uidotdev/usehooks";

// const dataCheck = [
//   {
//     Outlined: "Petrol",
//     From: "Mohammad Zeeshan",
//     To: ["Anand Singh", "Deepak Kumar", "Satish Maurya", "Mayank Pratap Singh"],
//     Amount: 500,
//   },
// ];

function DataField({ nameArray }) {
  const [money, setMoney] = useState("");
  const [From, setFrom] = React.useState("");
  const [personName, setPersonName] = React.useState([]);
  const [outlined, setOutlined] = useState("");

  // const location = useLocation();
  const [localState, handleSetState] = useLocalStorage("localState", []);

  const Navigate = useNavigate();

  function reducerFunction(dataEntry, action) {
    switch (action.type) {
      case "Add":
        return [...dataEntry, { ...action.payload }];

      default:
        return dataEntry;
    }
  }
  const [dataEntry, dispatch] = useReducer(reducerFunction, localState);

  function submitHandler(e) {
    e.preventDefault();

    const unitData = {};

    unitData.Amount = money;
    unitData.Outlined = outlined;
    unitData.From = From;
    unitData.To = personName;

    if (
      unitData.Amount === "" ||
      unitData.Outlined === "" ||
      unitData.From === "" ||
      unitData.To.length === 0
    ) {
      alert("Please fill all the fields !!");
      return;
    } else {
      dispatch({ type: "Add", payload: unitData });
    }

    setMoney("");
    setFrom("");
    setPersonName([]);
    setOutlined("");

    console.log("its working");
  }

  const TransactionContextHandler = useContext(TransactionData);
  // True => It will change the data
  // False=> Data Won't be affected

  
  
  function settleUpHandler() {

  let Transactions = {};

    
    dataEntry.forEach((e)=>{
      let From = e.From;
      Transactions[From]= Number(0);

      let To = e.To;

      To.forEach((e)=>{
        Transactions[e]= Number(0);
      })
    })


    dataEntry.forEach((element) => {
      let From = element.From;
      let To = [...element.To];
      let Amount = Number(element.Amount);

      Transactions[From] += Amount;

      let dividedAmount = Amount / To.length;

      To.forEach((element) => {
        Transactions[element] += -dividedAmount;
      });
    });

    TransactionContextHandler(Transactions, true);

    Navigate("/settleUp");
  }

  // To store the state Locally
  useEffect(() => {
    handleSetState(dataEntry);
  }, [dataEntry])




  return (
    <>
      <div className="inputContainer">
        <BasicSelect nameArray={nameArray} From={From} setFrom={setFrom} />

        <MultipleSelectChip
          nameArray={nameArray}
          personName={personName}
          setPersonName={setPersonName}
        />

        <Outlined outlined={outlined} setOutlined={setOutlined} />

        <Amount money={money} setMoney={setMoney} />

        <Box
          sx={{
            minWidth: 120,
            m: 5,
          }}
        >
          <Button
            type="submit"
            style={{ height: "50px" }}
            variant="outlined"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </Box>
      </div>

      <DataList dataEntry={dataEntry} />

      <div>
        <Box
          sx={{
            minWidth: 120,
            m: 5,
          }}
        >
          <Button
            type="submit"
            style={{ height: "50px" }}
            variant="outlined"
            onClick={settleUpHandler}
          >
            Clear Transactions
          </Button>
        </Box>
      </div>
    </>
  );
}

export default DataField;
