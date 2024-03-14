import { useContext } from "react";
import NameInput from "../Components/NameInput";
import "./Body.css";
import personCount from "../Contexts/personCount";
import { useNavigate } from "react-router-dom";

function Body({ nameCarrier }) {

  const recievedContext = useContext(personCount);
  const noOfPeople = recievedContext[0];
  const isDisabled = recievedContext[1];

  const nameArray = [];

  for (let i = 0; i < noOfPeople; i++) nameArray.push("");

  const arr = [];
  for (let i = 1; i <= noOfPeople; i++) arr.push(i);

  const magicShow = isDisabled ? "show" : "hide";

  const navigate = useNavigate();

  function clickHandler(e)
  {
      window.localStorage.clear();
      e.preventDefault();
      nameCarrier(nameArray);

      navigate('/showName');

  }

  return (
    <div className="container">
      <div id={magicShow} className="sub-title">
        <h4>Names</h4>
      </div>

      <form action="">

        {arr.map((e, i) => (
          <NameInput key={i + 1} sNo={i + 1} nameArray={nameArray} />
        ))}


        <div id={magicShow} className="submit-btn">

          <button onClick={clickHandler}>Submit</button>

        </div>


      </form>
    </div>
  );
}

export default Body;
