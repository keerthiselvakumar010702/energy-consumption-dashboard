import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Device } from "./Types";

const Dropdown: React.FC<Device> = ({ deviceName, handleDropdown }) => {
  const handleDevice = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    handleDropdown(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 300, padding: "10px" }} size="medium">
      <InputLabel id="demo-select-small" sx={{ padding: "10px" }}>
        Device
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={deviceName}
        label="device"
        onChange={handleDevice}
        // sx={{paddingBlockStart:"20px" }}
        fullWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"D1"}>DEVICE-1</MenuItem>
        <MenuItem value={"D2"}>DEVICE-2</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
