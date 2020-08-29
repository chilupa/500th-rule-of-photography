import React from "react"
import PropTypes from "prop-types"
import { Typography, Box } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <Box p={3}>
    <Typography variant="h4" color="primary" align="center">
      {siteTitle}
    </Typography>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
