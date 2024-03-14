import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Amount({money, setMoney}) {
  const numberSystem = ".0123456789";

  function onChange(e) {
    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setMoney("");
    } else if (numberSystem.indexOf(e.nativeEvent.data) !== -1)
      setMoney(money + e.nativeEvent.data);
  }

  return (
    <div>
      <Box
        sx={{
          minWidth: 120,
          m: 5,
        }}
      >
        <TextField
          id="money"
          value={money}
          label="Money"
          variant="outlined"
          onChange={onChange}
          placeholder="100.00"
        />
      </Box>
    </div>
  );
}

export default Amount;
