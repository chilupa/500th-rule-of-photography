import React from "react"
import PropTypes from "prop-types"
import { Box } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <Box p={3} textAlign="center">
    <h1>{siteTitle}</h1>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
