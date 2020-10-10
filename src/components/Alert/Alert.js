import React from "react"
import MuiAlert from "@material-ui/lab/Alert"

const Alert = props => (
  <MuiAlert elevation={6} icon={false} variant="filled" {...props} />
)

export default Alert
