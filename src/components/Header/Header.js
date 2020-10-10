import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => <h1>{siteTitle}</h1>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
