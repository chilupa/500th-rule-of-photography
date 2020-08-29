import React from "react"
import TextField from "@material-ui/core/TextField"

const FocalLength = ({ handleFocalLengthChange }) => (
  <form noValidate autoComplete="off">
    <TextField
      style={{ width: "180px" }}
      id="standard-basic"
      label="mm"
      type="number"
      min="0"
      onChange={handleFocalLengthChange}
    />
  </form>
)

export default FocalLength
