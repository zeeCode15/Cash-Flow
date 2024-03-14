import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './CssFiles/BasicSelect.css';

export default function BasicSelect({nameArray, From, setFrom}) {


  const handleChange = (event) => {
    setFrom(event.target.value);
  };

  return (

    <div className='basicSelectContainer'>
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 5, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Guy Made the Payment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={From}
          label="Age"
          onChange={handleChange}
        >
          {
            nameArray.map((name)=>{
              return <MenuItem value={name}>{name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
    </div>

  );
}
