import React from "react"
import './App.css';
import AboutMe from "./components/AboutMe"
import ContactInfo from "./components/ContactInfo"
import Projects from "./components/Projects"
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"

const App = () => {
  return (
    <div className="App">
      <h1>Hi, I'm Raquel</h1>
      <section>
        <AboutMe/>
      </section>
      <br></br>
      <section>
        <ContactInfo/>
      </section>
      <br></br>
      <section>
        <Projects/>
      </section>
    </div>
  )
}

export default App