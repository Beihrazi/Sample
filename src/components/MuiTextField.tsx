import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const[value, setValue] = useState("")
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
          <TextField label="Name" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="small secondary"
            color="secondary"
            size="small"
          ></TextField>
        </Stack>

        {/* Error prompt */}
        <Stack direction="row" spacing={2}>
          <TextField label="form input" required 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Dont share your password"}
          ></TextField>
          <TextField
            label="password "
            type="password"
            required
            helperText="Don not share"
            disabled
          ></TextField>
          <TextField
            label="Read only"
            InputProps={{ readOnly: true }}
          ></TextField>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          ></TextField>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiTextField;
