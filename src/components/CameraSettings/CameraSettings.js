import React, { useState } from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import CameraType from "../CameraType/CameraType"
import FocalLength from "../FocalLength/FocalLength"
import CameraIcon from "@material-ui/icons/Camera"
import Field from "../Field/Field"

const CameraSettings = () => {
  const [cropType, setCropType] = useState("Canon Crop Sensor")
  const [focalLength, setFocalLength] = useState("")
  const [shutterSpeed, setShutterSpeed] = useState("")

  const handleChange = event => setCropType(event.target.value)
  const handleFocalLengthChange = event => setFocalLength(event.target.value)

  const cameras = [
    { value: "Canon Crop Sensor", label: "Canon Crop Sensor" },
    { value: "Nikon Crop Sensor", label: "Nikon Crop Sensor" },
    { value: "Full Frame Cameras", label: "Full Frame Cameras" },
  ]

  const calculation = {
    "Canon Crop Sensor": 500 / focalLength / 1.6,
    "Nikon Crop Sensor": 500 / focalLength / 1.5,
    "Full Frame Cameras": 500 / focalLength,
  }

  const handleCalulation = () =>
    setShutterSpeed(Math.round(calculation[cropType], 0))

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12}>
        <Typography align="center">
          <CameraIcon color="secondary" fontSize="large" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" color="textPrimary" align="center">
          This app will calculate the shutter speed for your{" "}
          <b>Astro Photography</b> shots. Choosing the right shutter speed will
          avoid unnecessary star trails.
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Field text="Camera Type" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <CameraType
          cameras={cameras}
          handleChange={handleChange}
          cropType={cropType}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Field text="Focal Length" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <FocalLength handleFocalLengthChange={handleFocalLengthChange} />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">
          <Button
            disabled={focalLength === "" || cropType === ""}
            variant="contained"
            color="primary"
            onClick={handleCalulation}
          >
            Calculate
          </Button>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {focalLength && cropType && shutterSpeed && (
          <Typography color="secondary" variant="body1" align="center">
            Your shutter should be approximately <b>{shutterSpeed}</b> second(s)
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default CameraSettings
