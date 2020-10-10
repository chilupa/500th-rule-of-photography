import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import CameraSettings from "../components/CameraSettings/CameraSettings"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { Helmet } from "react-helmet"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
    body1: {
      fontSize: "1.2rem",
    },
    h1: {
      fontSize: "2.3rem",
    },
  },
})

const IndexPage = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>500th Rule Of Photography</title>
      <html lang="en" />
      <meta
        name="description"
        content="This app helps you avoid star trails while doing Astro photography and lets you choose right camera settings"
      />
    </Helmet>
    <Layout>
      <SEO title="500th Rule of Photography" />
      <CameraSettings />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
