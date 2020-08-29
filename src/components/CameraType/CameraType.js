import React from "react"
import { MenuItem } from "@material-ui/core"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"

const CameraType = ({ cropType, handleChange, cameras }) => (
  <FormControl>
    <Select style={{ width: "180px" }} value={cropType} onChange={handleChange}>
      {cameras.map(({ value, label }, index) => (
        <MenuItem key={index} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default CameraType
