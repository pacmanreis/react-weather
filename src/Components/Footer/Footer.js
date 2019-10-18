import React from 'react'

const Footer = () => {
  return <footer>
    <p>
      <strong>Developed by Paulo Reis </strong>
      <a href="https://www.linkedin.com/in/paulo-reis-955411186/"
        target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/icons/linkedin.svg"
          alt="linkedin"
          width="15"/>
      </a> <a href="https://github.com/pacmanreis"
        target="_blank"
        rel="noopener noreferrer">
        <img src="./assets/icons/github.svg"
          alt="linkedin"
          width="15"/>
      </a>
    </p>
    <p>
      <a href="https://darksky.net/poweredby/">
        Powered by Dark Sky
      </a> & Search by <a href="https://locationiq.com/?ref=link-back">
        LocationIQ.com
      </a>
    </p>
  </footer>
}

export default Footer
