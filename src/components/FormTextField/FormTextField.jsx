import { TextField } from "@mui/material"

const FormTextField = ({ ...props }) => (
  <TextField
    margin="normal"
    fullWidth
    variant="outlined"
    {...props}
    sx={{
      height: "3.5rem",
      borderRadius: "5px",
      ".MuiInputLabel-root": {
        color: "#1e1e1e",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#1e1e1e",
        },
      },
    }}
  />
)

export default FormTextField
