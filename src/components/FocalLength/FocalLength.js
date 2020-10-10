import React from "react"
import TextField from "@material-ui/core/TextField"

const FocalLength = ({ handleFocalLengthChange }) => (
  <TextField
    label="Focal Length (mm)"
    type="number"
    min="0"
    onChange={handleFocalLengthChange}
  />
)

export default FocalLength
