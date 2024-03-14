import React, { useRef } from "react";
import "./Header.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react'
import personCount from "../Contexts/personCount";
import { Box, Button } from "@mui/material";


function Header() {

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled]= useState(false);

  const noOfPeople = useRef(0);

  function onChangeClick(e)
  {
    
    noOfPeople.current= e.target.value;

  }

  function goClickHandler(e)
  {
      e.preventDefault();

      setIsDisabled(true);

      navigate('/body');
  }

  function navigateToHome()
  {
    setIsDisabled(false);
    navigate('/');
  }

  const location = useLocation();

  function previousNav()
  {
    // console.log(location);
    navigate('/showName');
  }

  return (
    <>


      <div className="header" onClick={navigateToHome}>Cash-Flow 💸</div>

      <div className="noInputClass" >
        
      <form>
        <label htmlFor="noOfPeople">No of People: </label>
        <input
          type="number"
          name="noOfPeople"
          id="noOfPeople"
          onChange={onChangeClick}
          disabled={isDisabled}
        />

        <button className="goBtn" onClick={goClickHandler}>
          Go
        </button>
      </form>
      </div >

      <div className="prevSplit">
      {
        location.pathname==='/'   && !(window.localStorage.getItem('localState')===null || window.localStorage.getItem('localState')==='[]') ? 
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
            onClick={previousNav}
          >
            Last Split-Up
          </Button>
        </Box>
         : null 
      }

      </div>

    



<personCount.Provider value={[noOfPeople.current, isDisabled]}>

      <Outlet ></Outlet>
      
</personCount.Provider>

    </>
  );
}

export default Header;
