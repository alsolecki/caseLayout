import React from 'react'

const Header = ({ title, poop }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{poop}</p>
    </div>
  )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header