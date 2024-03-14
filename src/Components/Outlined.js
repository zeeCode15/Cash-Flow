import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Outlined({unitData, outlined, setOutlined}) {


  function clickHandle(e) {
    setOutlined(e.target.value);
  }

  return (
    <Box
      sx={{
        minWidth: 120,
        m: 5,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={clickHandle}
        placeholder="Petrol"
        value={outlined}
      />
    </Box>
  );
}

export default Outlined;
