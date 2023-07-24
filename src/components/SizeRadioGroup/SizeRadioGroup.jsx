import React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

const SizeRadioGroup = () => (
  <FormControl>
    <FormLabel>Size</FormLabel>
    <RadioGroup row>
      <FormControlLabel value="S" control={<Radio />} label="S" />
      <FormControlLabel value="M" control={<Radio />} label="M" />
      <FormControlLabel value="L" control={<Radio />} label="L" />
    </RadioGroup>
  </FormControl>
)

export default SizeRadioGroup
