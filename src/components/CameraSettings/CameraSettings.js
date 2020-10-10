import React, { useState } from "react"
import { Grid, Button, Typography, Snackbar } from "@material-ui/core"
import CameraType from "../CameraType/CameraType"
import FocalLength from "../FocalLength/FocalLength"
import CameraIcon from "@material-ui/icons/Camera"
import Field from "../Field/Field"
import CenteredBox from "../CenteredBox/CenteredBox"
import { Zoom, Bounce } from "react-reveal"
import Alert from "../Alert/Alert"

const CameraSettings = () => {
  const [cropType, setCropType] = useState("Canon Crop Sensor")
  const [focalLength, setFocalLength] = useState("")
  const [shutterSpeed, setShutterSpeed] = useState("")
  const [error, setError] = useState(false)

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

  const handleCalculation = () => {
    const shutterSpeed = Math.round(calculation[cropType], 0)
    if (shutterSpeed === Infinity) {
      setError(true)
    } else {
      setShutterSpeed(shutterSpeed)
      setError(false)
    }
  }

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
    handleCalculation()
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item>
        <CenteredBox>
          <Zoom>
            <CameraIcon color="secondary" style={{ fontSize: "4rem" }} />
          </Zoom>
        </CenteredBox>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" color="textPrimary" align="center">
          Calculate the shutter speed for your <b>Astrophotography</b> shots.
          Choosing the right shutter speed will avoid unnecessary star trails.
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
      <Grid item xs={6} sm={3}>
        <Typography align="center">
          <Button
            fullWidth
            disabled={focalLength === "" || cropType === ""}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Calculate
          </Button>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          {error ? (
            <Alert severity="error">
              <Typography variant="body1" align="center">
                Something went wrong. Please try again.
              </Typography>
            </Alert>
          ) : (
            <Alert severity="success">
              <Typography variant="body1" align="center">
                Your shutter speed should be ~ <b>{shutterSpeed}</b> second(s)
              </Typography>
            </Alert>
          )}
        </Snackbar>
      </Grid>
    </Grid>
  )
}

export default CameraSettings
