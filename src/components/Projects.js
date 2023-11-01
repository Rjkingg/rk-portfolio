import React from "react"
import "../App.css"
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap"

const Project = () => {
    return(
        <Card className="card mx-auto"
        color="primary"
        inverse
        style={{
            width: '18rem'
          }}>
            <CardBody>
            <CardTitle>Project</CardTitle>
             <CardText>Details</CardText>
             </CardBody>
         </Card>
    )
}

export default Project