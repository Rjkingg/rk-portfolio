import React from "react"
import "../App.css"
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"

const AboutMe = () => {
    return(
        
        <Card className="card mx-auto"
        color="primary"
        inverse
        style={{
            width: '18rem'
          }}>
            <CardBody>
            <CardTitle>About Me</CardTitle>
             <CardText>Details</CardText>
             </CardBody>
         </Card>
         
        
       
    )
}

export default AboutMe