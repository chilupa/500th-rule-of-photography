import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import CameraSettings from "../components/CameraSettings/CameraSettings"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
})

const IndexPage = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Layout>
      <SEO title="500th Rule of Photography" />
      <CameraSettings />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
