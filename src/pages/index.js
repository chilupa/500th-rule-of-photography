import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import CameraSettings from "../components/CameraSettings/CameraSettings"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
})

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <CameraSettings />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
