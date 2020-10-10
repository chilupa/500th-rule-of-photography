import React, { useState } from "react"
import { Grid, Button, Snackbar, Box } from "@material-ui/core"
import CameraType from "../CameraType/CameraType"
import FocalLength from "../FocalLength/FocalLength"
import { Zoom, Bounce } from "react-reveal"
import Alert from "../Alert/Alert"
import { IoIosCamera } from "react-icons/io"

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
      alignItems="center"
      justify="center"
      spacing={4}
    >
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <Zoom>
          <IoIosCamera style={{ fontSize: "3rem" }} />
        </Zoom>
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <p>
          Calculate the shutter speed for your <b>Astrophotography</b> shots.
          Choosing the right shutter speed will avoid unnecessary star trails.
        </p>
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <CameraType
          cameras={cameras}
          handleChange={handleChange}
          cropType={cropType}
        />
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <FocalLength handleFocalLengthChange={handleFocalLengthChange} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Box pt={2}>
          <Button
            fullWidth
            disabled={focalLength === "" || cropType === ""}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Calculate
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          {error ? (
            <Alert severity="error">
              <Bounce>
                <div>Something went wrong. Please try again.</div>
              </Bounce>
            </Alert>
          ) : (
            <Alert severity="success">
              <Bounce>
                <div>
                  Your shutter speed should be ~ <b>{shutterSpeed}</b> second(s)
                </div>
              </Bounce>
            </Alert>
          )}
        </Snackbar>
      </Grid>
    </Grid>
  )
}

export default CameraSettings
