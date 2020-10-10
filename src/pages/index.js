import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import CameraSettings from "../components/CameraSettings/CameraSettings"
import { Helmet } from "react-helmet"

export default () => (
  <>
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
  </>
)
