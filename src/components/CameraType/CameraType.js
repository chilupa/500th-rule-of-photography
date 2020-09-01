import React from "react"
import { MenuItem } from "@material-ui/core"
import Select from "@material-ui/core/Select"

const CameraType = ({ cropType, handleChange, cameras }) => (
  <Select value={cropType} onChange={handleChange}>
    {cameras.map(({ value, label }, index) => (
      <MenuItem key={index} value={value}>
        {label}
      </MenuItem>
    ))}
  </Select>
)

export default CameraType
