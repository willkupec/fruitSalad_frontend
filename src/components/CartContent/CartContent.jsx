import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material"
import { map } from "lodash"
import CloseIcon from "@mui/icons-material/Close"

const CartContent = ({ cart, removeFromCart }) =>
  map(cart, (item, index) => (
    <Box key={`${index}_${item.id}`}>
      <Box display="flex" sx={{ pt: 2, pb: 2, ml: 2 }} alignItems="start">
        <Avatar
          src={item.src}
          sx={{ width: 96, height: 96, mr: 2, borderRadius: 0 }}
        />
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body1">€{item.price}</Typography>
        </Box>
        <IconButton
          onClick={() => removeFromCart(item)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "-0.2rem",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  ))

export default CartContent
