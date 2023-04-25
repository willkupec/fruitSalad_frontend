import React from "react"
import { Box } from "@mui/material"

const LoginError = ({msg, visible}) => {
    return (
        <Box sx={{ textAlign: "center", backgroundColor: "red", color: "white", borderRadius: "4px", width: "auto", height: "auto", display: visible, p: "20px 0" }}>
            {msg}
        </Box>
    )
}

export default LoginError
