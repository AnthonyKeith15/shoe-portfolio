import React from "react";
import './Footer.css'

class Footer extends React.Component {
  render() {
    return(
      <>
      <footer>
        <a href="https://github.com/AnthonyKeith15" target="_blank"><img src="./icons/github.svg" alt="Github Logo"></img></a>
        <a href="https://www.linkedin.com/in/anthony-keith/" target="_blank"><img src="./icons/linkedin.svg" alt="Linked In Logo"></img></a>
      </footer>
      </>
    )
  }
}

export default Footer