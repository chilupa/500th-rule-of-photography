import { Box } from "@material-ui/core"
import React from "react"

const CenteredBox = ({ children }) => (
  <Box display="flex" flexDirection="row" justifyContent="center" p={4}>
    {children}
  </Box>
)

export default CenteredBox
